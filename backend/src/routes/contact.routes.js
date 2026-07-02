import { Router } from "express";
import { createContact } from "../controllers/contact.controller.js";
import { validate } from "../middleware/validate.middleware.js";
import { contactSchema } from "../validators/contact.validator.js";

const router = Router();

router.post(
  "/",
  validate(contactSchema),
  createContact
);

export default router;