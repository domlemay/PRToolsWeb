import prisma from '../prisma/prisma';
export const listActivePRs = async (req, res) => {
    try {
        const prs = await prisma.intervenant_pr.findMany({
            where: { actif: true },
            select: { id: true, nom: true, prenom: true, numero_pr: true }
        });
        return res.json({ success: true, prs });
    }
    catch (err) {
        return res.status(500).json({ success: false, error: String(err) });
    }
};
// Create a new rapport d'intervention
// Expects body: { patient_id: number, code_smpau: string, numero_formulaire_terrain?: string, no_autor?: string, intervenants?: [{ id:number, role?:string }] }
export const createRapport = async (req, res) => {
    const { patient_id, numero_formulaire_terrain, code_smpau, no_autor, intervenants } = req.body;
    if (!patient_id || typeof patient_id !== 'number')
        return res.status(400).json({ message: 'patient_id requis et doit être un nombre' });
    if (!code_smpau || typeof code_smpau !== 'string')
        return res.status(400).json({ message: 'code_smpau requis' });
    try {
        const patient = await prisma.patient.findUnique({ where: { id: patient_id } });
        if (!patient)
            return res.status(400).json({ message: 'patient introuvable' });
        const intervArray = Array.isArray(intervenants) ? intervenants : [];
        const ids = intervArray.map((i) => Number(i.id)).filter((n) => !Number.isNaN(n));
        if (ids.length > 0) {
            // Vérifier que tous les intervenants existent et sont actifs
            const found = await prisma.intervenant_pr.findMany({ where: { id: { in: ids }, actif: true }, select: { id: true } });
            const foundIds = found.map((p) => p.id);
            const missing = ids.filter((id) => !foundIds.includes(id));
            if (missing.length > 0)
                return res.status(400).json({ message: 'Certains intervenants sont introuvables ou inactifs', missing });
        }
        const rapport = await prisma.$transaction(async (tx) => {
            const created = await tx.r_rapport_pr.create({
                data: {
                    patient_id,
                    numero_formulaire_terrain: numero_formulaire_terrain || null,
                    code_smpau,
                    no_autor: no_autor || null,
                    etat_rapport: 'brouillon',
                    created_at: new Date(),
                    updated_at: new Date(),
                }
            });
            if (ids.length > 0) {
                const linkCreates = intervArray.map((i) => ({
                    rapport_id: created.id,
                    intervenant_id: Number(i.id),
                    role: i.role || null
                }));
                // createMany for linking table; skipDuplicates to avoid unique constraint errors
                await tx.r_rapport_pr_intervenant.createMany({ data: linkCreates, skipDuplicates: true });
            }
            return created;
        });
        return res.status(201).json({ success: true, rapport });
    }
    catch (err) {
        return res.status(500).json({ success: false, error: String(err) });
    }
};
//# sourceMappingURL=rapport.controller.js.map