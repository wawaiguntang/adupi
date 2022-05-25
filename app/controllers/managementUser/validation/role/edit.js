import { check } from "express-validator";

export const editRoleValidation = [
  check("roleCode", "Role code is required").notEmpty().trim().escape(),
  check("role", "Role is required").notEmpty().trim().escape()
];
