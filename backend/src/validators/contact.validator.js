import Joi from "joi";

export const contactSchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(2)
    .max(100)
    .required(),

  email: Joi.string()
    .email()
    .required(),

  company: Joi.string()
    .allow("")
    .max(100),

  phone: Joi.string()
    .allow("")
    .max(20),

  budget: Joi.string()
    .allow("")
    .max(50),

  message: Joi.string()
    .trim()
    .min(10)
    .max(2000)
    .required(),
});