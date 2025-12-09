import prisma from '../prisma/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { randomUUID } from 'crypto';
import { addToBlacklist } from '../utils/tokenBlacklist';
dotenv.config();
export const register = async (req, res) => {
    const { email, mot_de_passe, nom, prenom, numero_pr, niveau_pr, cellulaire } = req.body;
    // Validation stricte : Exiger les champs nécessaires côté client
    if (!email || !mot_de_passe || !numero_pr || !niveau_pr) {
        return res.status(400).json({ message: 'Champs requis: email, mot_de_passe, numero_pr et niveau_pr' });
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
    });
};
export const login = async (req, res) => {
    const { email, mot_de_passe } = req.body;
    if (!email || !mot_de_passe)
        return res.status(400).json({ message: 'Email et mot_de_passe requis' });
    const intervenant = await prisma.intervenant_pr.findUnique({ where: { email } });
    if (!intervenant)
        return res.status(400).json({ message: 'Intervenant non trouvé' });
    const valid = await bcrypt.compare(mot_de_passe, intervenant.mot_de_passe || '');
    if (!valid)
        return res.status(400).json({ message: 'Mot de passe incorrect' });
    const jti = randomUUID();
    const expiresIn = process.env.JWT_EXPIRES || '2h';
    const algorithm = (process.env.JWT_ALGORITHMS || 'HS256');
    const token = jwt.sign({ sub: intervenant.id, email: intervenant.email, niveau: intervenant.niveau_pr, jti }, process.env.JWT_SECRET, {
        expiresIn,
        issuer: process.env.JWT_ISSUER,
        audience: process.env.JWT_AUDIENCE,
        algorithm,
    });
    return res.status(200).json({
        success: true,
        message: 'Connexion réussie',
        token,
        user: { id: intervenant.id, email: intervenant.email, nom: intervenant.nom, prenom: intervenant.prenom }
    });
};
export const logout = async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader)
        return res.status(400).json({ message: 'Authorization manquante' });
    const token = authHeader.split(' ')[1];
    if (!token)
        return res.status(400).json({ message: 'Token manquant' });
    try {
        const algorithm = (process.env.JWT_ALGORITHMS || 'HS256');
        const decoded = jwt.verify(token, process.env.JWT_SECRET, {
            algorithms: [algorithm],
            issuer: process.env.JWT_ISSUER,
            audience: process.env.JWT_AUDIENCE,
            ignoreExpiration: false,
        });
        if (!decoded.jti || !decoded.exp) {
            return res.status(400).json({ message: 'Token invalide pour révocation' });
        }
        // add to blacklist until token expiration
        addToBlacklist(decoded.jti, decoded.exp);
        return res.status(200).json({ success: true, message: 'Déconnecté, token révoqué' });
    }
    catch (error) {
        return res.status(400).json({ message: 'Token invalide ou déjà expiré' });
    }
};
//# sourceMappingURL=auth.controller.js.map