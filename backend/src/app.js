import express from "express";
import cors from "cors";
import helmet from "helmet";

import servicesRoutes from "./routes/services.routes.js";
import contactRoutes from "./routes/contact.routes.js";

import { apiLimiter } from "./middleware/rateLimit.middleware.js";

const app = express();

// Security
app.use(helmet());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Body Parser
app.use(express.json());

// Rate Limiting
app.use(apiLimiter);

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/services", servicesRoutes);

// Health Check
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Nene IT & Consulting API is running",
    version: "1.0.0",
  });
});

export default app;