import express from "express";
import cors from "cors";
import servicesRoutes from "./routes/services.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import { apiLimiter } from "./middleware/rateLimit.middleware.js";

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use("/api/contact", contactRoutes);
app.use(apiLimiter);

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