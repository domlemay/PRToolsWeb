import { Router } from 'express';
import { authenticate } from '../middlewares/auth.middleware';
import { listActivePRs, createRapport } from '../controllers/rapport.controller';
import { createFullRapport } from '../controllers/rapport.full.controller';

const router = Router();

// Retourne la liste des intervenants PR actifs (sélection seulement, pas de création ici)
router.get('/prs', authenticate, listActivePRs);

// Crée un nouveau rapport d'intervention
router.post('/', authenticate, createRapport);

// Crée un rapport complet avec sections (utilise transaction pour tout créer)
router.post('/full', authenticate, createFullRapport);

export default router;
