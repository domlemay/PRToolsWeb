import express from "express";
import authRoutes from "./routes/auth.routes";
import intervenantRoutes from "./routes/intervenant.routes";
import rapportRoutes from "./routes/rapport.routes";
import patientRoutes from "./routes/patient.routes";
import dotenv from "dotenv";
import helmet from 'helmet';
dotenv.config();
const app = express();
app.use(helmet());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/admin/intervenants", intervenantRoutes);
app.use("/rapports", rapportRoutes);
app.use('/patients', patientRoutes);
if (process.env.NODE_ENV !== 'test') {
    const port = Number(process.env.PORT) || 3000;
    const host = process.env.HOST || '0.0.0.0';
    app.listen(port, host, () => {
        console.log(`Server running on ${host}:${port}`);
    }).on('error', (err) => {
        console.error('Failed to start server:', err);
    });
}
export default app;
//# sourceMappingURL=server.js.map