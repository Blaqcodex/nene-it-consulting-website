import express from "express";
import cors from "cors";
import servicesRoutes from "./routes/services.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Nene IT & Consulting API is running",
    version: "1.0.0",
  });
});

// Services API
app.use("/api/services", servicesRoutes);

export default app;