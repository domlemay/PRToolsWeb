import { Router } from "express";
import { login, register } from "../controllers/auth.controller";
import { authenticate } from "../middlewares/auth.middleware";
const router = Router();
router.post("/login", login);
router.post("/register", register);
router.get("/profile", authenticate, (req, res) => {
    res.json({
        message: "Accès autorisé",
        user: req.user
    });
});
export default router;
//# sourceMappingURL=auth.routes.js.map