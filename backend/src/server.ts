import express from "express";
import authRoutes from "./routes/auth.routes";
import intervenantRoutes from "./routes/intervenant.routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/admin/intervenants", intervenantRoutes);

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
