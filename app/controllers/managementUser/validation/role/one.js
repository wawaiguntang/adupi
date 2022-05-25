import { check } from "express-validator";

export const oneRoleValidation = [
  check("roleCode", "Role code is required").notEmpty().trim().escape(),
];
