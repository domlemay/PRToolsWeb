import express from "express";
import authRoutes from "./routes/auth.routes";
import intervenantRoutes from "./routes/intervenant.routes";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/admin/intervenants", intervenantRoutes);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//# sourceMappingURL=server.js.map