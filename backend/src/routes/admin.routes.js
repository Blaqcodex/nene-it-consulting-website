import express from "express";
import { getDashboard, getContacts, } from "../controllers/admin.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import { updateContactStatus, deleteContact, } from "../controllers/admin.controller.js";

const router = express.Router();

router.get("/dashboard", protect, getDashboard);
router.get("/contacts", protect, getContacts);
router.put("/contacts/:id/status", protect, updateContactStatus);
router.delete("/contacts/:id", protect, deleteContact);
export default router;