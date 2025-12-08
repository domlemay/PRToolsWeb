import { Router } from 'express';
import { authenticate } from '../middlewares/auth.middleware';
import { listIntervenants, deleteIntervenant, changePassword, getIntervenant } from '../controllers/intervenant.controller';
const router = Router();
// Toutes les routes ci-dessous requièrent un token et un niveau admin
router.get('/', authenticate, listIntervenants);
router.get('/:id', authenticate, getIntervenant);
router.delete('/:id', authenticate, deleteIntervenant);
router.post('/:id/change-password', authenticate, changePassword);
export default router;
//# sourceMappingURL=intervenant.routes.js.map