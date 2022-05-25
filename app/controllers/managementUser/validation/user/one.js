import { check } from "express-validator";

export const oneUserValidation = [
  check("userCode", "User code is required").notEmpty().trim().escape(),
];
