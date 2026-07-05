import express from "express";
import { getDashboard, getContacts, } from "../controllers/admin.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/dashboard", protect, getDashboard);
router.get("/contacts", protect, getContacts);

export default router;