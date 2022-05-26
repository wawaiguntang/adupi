import { check } from "express-validator";

export const oneFasilitatorValidation = [
  check("fasilitatorCode", "Fasilitator code is required").notEmpty().trim().escape(),
];
