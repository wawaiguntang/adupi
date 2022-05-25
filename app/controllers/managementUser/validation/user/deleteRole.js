import { check } from "express-validator";

export const deleteRoleUserValidation = [
  check("ruCode", "Role user code is required").notEmpty().trim().escape(),
];