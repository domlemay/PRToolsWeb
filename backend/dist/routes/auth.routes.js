import { Router } from "express";
import { login, register, logout } from "../controllers/auth.controller";
import { authenticate } from "../middlewares/auth.middleware";
import rateLimit from "express-rate-limit";
const router = Router();
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // limit each IP to 10 requests per windowMs
    standardHeaders: true,
    legacyHeaders: false,
});
router.post("/login", loginLimiter, login);
router.post("/register", register);
router.post("/logout", authenticate, logout);
router.get("/profile", authenticate, (req, res) => {
    res.json({
        message: "Accès autorisé",
        user: req.user
    });
});
export default router;
//# sourceMappingURL=auth.routes.js.map