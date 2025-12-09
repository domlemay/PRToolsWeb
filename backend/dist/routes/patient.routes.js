import { Router } from 'express';
import { authenticate } from '../middlewares/auth.middleware';
import { createPatient } from '../controllers/patient.controller';
const router = Router();
// Crée un patient (utilisé par l'UI si besoin)
router.post('/', authenticate, createPatient);
export default router;
//# sourceMappingURL=patient.routes.js.map