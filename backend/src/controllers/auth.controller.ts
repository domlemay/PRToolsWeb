import type { Request , Response } from 'express';
import prisma from '../prisma/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { randomUUID } from 'crypto';
import { addToBlacklist } from '../utils/tokenBlacklist';

dotenv.config();

export const register = async (req: Request, res: Response) => {
    const { email, mot_de_passe, nom, prenom, numero_pr, niveau_pr, cellulaire } = req.body;

    // Validation minimale : les champs obligatoires pour créer un intervenant
    if (!email || !numero_pr || !niveau_pr) {
        return res.status(400).json({ message: 'Champs requis: email, numero_pr et niveau_pr' });
    }

    const existing = await prisma.intervenant_pr.findUnique({ where: { email } });
    if (existing) {
        return res.status(400).json({ message: 'Un intervenant existe déjà avec cet email' });
    }

    // Si un mot de passe est fourni, on le hache et on active l'utilisateur.
    // Sinon, on crée un intervenant non actif et non admin (mot_de_passe NULL).
    let data: any = {
        email,
        nom,
        prenom,
        numero_pr,
        niveau_pr,
        cellulaire,
        admin: false,
    };

    if (mot_de_passe && typeof mot_de_passe === 'string' && mot_de_passe.length > 0) {
        const hashedPassword = await bcrypt.hash(mot_de_passe, 10);
        data.mot_de_passe = hashedPassword;
        data.actif = true;
        data.date_active = new Date();
    } else {
        // pas de mot de passe fourni => utilisateur non actif et non admin
        data.mot_de_passe = null;
        data.actif = false;
    }

    const newIntervenant = await prisma.intervenant_pr.create({ data });

    return res.status(201).json({
        success: true,
        message: 'Intervenant enregistré avec succès',
        intervenant: { id: newIntervenant.id, email: newIntervenant.email, nom: newIntervenant.nom, prenom: newIntervenant.prenom }
    })
}

export const login = async (req: Request, res: Response) =>{
    const { email, mot_de_passe } = req.body;
    if (!email || !mot_de_passe) return res.status(400).json({ message: 'Email et mot_de_passe requis' });

    const intervenant = await prisma.intervenant_pr.findUnique({ where: { email } });
    if (!intervenant) return res.status(400).json({ message: 'Intervenant non trouvé' });

    // Vérifier que l'utilisateur possède un mot de passe
    if (!intervenant.mot_de_passe) {
        return res.status(400).json({ message: 'Compte sans mot de passe : connexion impossible' });
    }

    const valid = await bcrypt.compare(mot_de_passe, intervenant.mot_de_passe);
    if (!valid) return res.status(400).json({ message: 'Mot de passe incorrect' });
        const jti = randomUUID();
        const expiresIn = process.env.JWT_EXPIRES || '2h';
        const algorithm = (process.env.JWT_ALGORITHMS || 'HS256') as jwt.Algorithm;

        const token = jwt.sign(
                { sub: intervenant.id, email: intervenant.email, niveau: intervenant.niveau_pr, jti },
                process.env.JWT_SECRET as jwt.Secret,
                ({
                    expiresIn,
                    issuer: process.env.JWT_ISSUER,
                    audience: process.env.JWT_AUDIENCE,
                    algorithm,
                } as jwt.SignOptions)
        );
    return res.status(200).json({
        success: true,
        message: 'Connexion réussie',
        token,
        user: { id: intervenant.id, email: intervenant.email, nom: intervenant.nom, prenom: intervenant.prenom }
    })
}

export const logout = async (req: Request, res: Response) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(400).json({ message: 'Authorization manquante' });

    const token = authHeader.split(' ')[1];
    if (!token) return res.status(400).json({ message: 'Token manquant' });

        try {
        const algorithm = (process.env.JWT_ALGORITHMS || 'HS256') as jwt.Algorithm;
        const decoded = jwt.verify(token, process.env.JWT_SECRET as jwt.Secret, {
            algorithms: [algorithm],
            issuer: process.env.JWT_ISSUER,
            audience: process.env.JWT_AUDIENCE,
            ignoreExpiration: false,
        } as jwt.VerifyOptions) as { jti?: string; exp?: number };

        if (!decoded.jti || !decoded.exp) {
            return res.status(400).json({ message: 'Token invalide pour révocation' });
        }

        // add to blacklist until token expiration
        addToBlacklist(decoded.jti, decoded.exp);

        return res.status(200).json({ success: true, message: 'Déconnecté, token révoqué' });
    } catch (error) {
        return res.status(400).json({ message: 'Token invalide ou déjà expiré' });
    }
}