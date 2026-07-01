import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Full name must be at least 2 characters."),

  company: z.string().optional(),

  email: z
    .string()
    .email("Please enter a valid email address."),

  message: z
    .string()
    .min(20, "Tell us a little more about your project (minimum 20 characters)."),
});