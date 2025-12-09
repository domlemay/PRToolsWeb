import jwt from "jsonwebtoken";
import { isBlacklisted } from "../utils/tokenBlacklist";
export const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader)
        return res.status(401).json({ error: "Authorization manquante" });
    const token = authHeader.split(" ")[1];
    if (!token)
        return res.status(401).json({ error: "Token manquant" });
    try {
        const algorithm = (process.env.JWT_ALGORITHMS || "HS256");
        const decoded = jwt.verify(token, process.env.JWT_SECRET, {
            algorithms: [algorithm],
            issuer: process.env.JWT_ISSUER,
            audience: process.env.JWT_AUDIENCE,
        });
        if (decoded.jti && isBlacklisted(decoded.jti)) {
            return res.status(401).json({ error: "Token révoqué" });
        }
        req.user = decoded; // Ajout sur req.user → défini dans express.d.ts
        return next();
    }
    catch (error) {
        return res.status(401).json({ error: "Token invalide ou expiré" });
    }
};
//# sourceMappingURL=auth.middleware.js.map