import type { Request , Response } from 'express';
import prisma from '../prisma/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
export const register = async (req: Request, res: Response) => {
    const { email, mot_de_passe, nom, prenom, numero_pr, niveau_pr, cellulaire } = req.body;

    if (!email || !mot_de_passe) {
        return res.status(400).json({ message: 'Email et mot_de_passe requis' });
    }

    const existing = await prisma.intervenant_pr.findUnique({ where: { email } });
    if (existing) {
        return res.status(400).json({ message: 'Un intervenant existe déjà avec cet email' });
    }

    const hashedPassword = await bcrypt.hash(mot_de_passe, 10);

    const newIntervenant = await prisma.intervenant_pr.create({
        data: {
            email,
            mot_de_passe: hashedPassword,
            nom,
            prenom,
            numero_pr,
            niveau_pr,
            cellulaire,
            date_active: new Date(),
            actif: true,
        },
    });

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

    const valid = await bcrypt.compare(mot_de_passe, intervenant.mot_de_passe || '');
    if (!valid) return res.status(400).json({ message: 'Mot de passe incorrect' });

    const token = jwt.sign(
        { sub: intervenant.id, email: intervenant.email, niveau: intervenant.niveau_pr },
        process.env.JWT_SECRET as string,
        { expiresIn: '2h' }
    )

    return res.status(200).json({
        success: true,
        message: 'Connexion réussie',
        token,
        user: { id: intervenant.id, email: intervenant.email, nom: intervenant.nom, prenom: intervenant.prenom }
    })
}