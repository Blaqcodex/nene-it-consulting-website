import express from "express";
import cors from "cors";
import helmet from "helmet";

import servicesRoutes from "./routes/services.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import authRoutes from "./routes/auth.routes.js";

import { apiLimiter } from "./middleware/rateLimit.middleware.js";

const app = express();

/* ==========================================
   Global Middleware
========================================== */

app.use(helmet());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

/* ==========================================
   Routes
========================================== */

// Health Check
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Nene IT & Consulting API is running",
    version: "1.0.0",
  });
});

// Public Routes
app.use("/api/services", servicesRoutes);

// Auth Routes
app.use("/api/auth", authRoutes);

// Protected Against Spam
app.use("/api/contact", apiLimiter, contactRoutes);


export default app;