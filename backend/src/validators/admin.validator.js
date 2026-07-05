import Joi from "joi";

export const getContactsSchema = Joi.object({
  page: Joi.number()
    .integer()
    .min(1)
    .default(1),

  limit: Joi.number()
    .integer()
    .min(1)
    .max(100)
    .default(10),

  search: Joi.string()
    .allow("")
    .default(""),

  status: Joi.string()
    .valid("New", "Contacted", "Closed", "")
    .default(""),

  sort: Joi.string()
    .valid("asc", "desc")
    .default("desc"),
});