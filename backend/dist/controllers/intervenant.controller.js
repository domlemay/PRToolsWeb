import prisma from '../prisma/prisma';
import bcrypt from 'bcrypt';
function isAdmin(req) {
    return req.user && req.user.niveau && String(req.user.niveau).toLowerCase() === 'admin';
}
export const listIntervenants = async (req, res) => {
    if (!isAdmin(req))
        return res.status(403).json({ message: 'Accès refusé' });
    const intervenants = await prisma.intervenant_pr.findMany({
        select: { id: true, email: true, nom: true, prenom: true, numero_pr: true, niveau_pr: true, actif: true, date_active: true }
    });
    return res.json({ success: true, intervenants });
};
export const deleteIntervenant = async (req, res) => {
    if (!isAdmin(req))
        return res.status(403).json({ message: 'Accès refusé' });
    const id = Number(req.params.id);
    if (Number.isNaN(id))
        return res.status(400).json({ message: 'ID invalide' });
    try {
        await prisma.intervenant_pr.delete({ where: { id } });
        return res.json({ success: true, message: 'Intervenant supprimé' });
    }
    catch (err) {
        return res.status(500).json({ success: false, message: 'Erreur lors de la suppression', error: String(err) });
    }
};
export const changePassword = async (req, res) => {
    if (!isAdmin(req))
        return res.status(403).json({ message: 'Accès refusé' });
    const id = Number(req.params.id);
    const { new_password } = req.body;
    if (Number.isNaN(id))
        return res.status(400).json({ message: 'ID invalide' });
    if (!new_password || typeof new_password !== 'string')
        return res.status(400).json({ message: 'Nouveau mot de passe requis' });
    const hashed = await bcrypt.hash(new_password, 10);
    try {
        await prisma.intervenant_pr.update({ where: { id }, data: { mot_de_passe: hashed } });
        return res.json({ success: true, message: 'Mot de passe mis à jour' });
    }
    catch (err) {
        return res.status(500).json({ success: false, message: 'Erreur lors de la mise à jour', error: String(err) });
    }
};
export const getIntervenant = async (req, res) => {
    if (!isAdmin(req))
        return res.status(403).json({ message: 'Accès refusé' });
    const id = Number(req.params.id);
    if (Number.isNaN(id))
        return res.status(400).json({ message: 'ID invalide' });
    const intervenant = await prisma.intervenant_pr.findUnique({ where: { id }, select: { id: true, email: true, nom: true, prenom: true, numero_pr: true, niveau_pr: true, actif: true } });
    if (!intervenant)
        return res.status(404).json({ message: 'Intervenant non trouvé' });
    return res.json({ success: true, intervenant });
};
//# sourceMappingURL=intervenant.controller.js.map