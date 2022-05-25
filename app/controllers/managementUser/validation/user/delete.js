import { check } from "express-validator";

export const deleteUserValidation = [
  check("userCode", "User code is required").notEmpty().trim().escape(),
];
