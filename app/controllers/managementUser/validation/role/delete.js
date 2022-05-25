import { check } from "express-validator";

export const deleteRoleValidation = [
  check("roleCode", "Role code is required").notEmpty().trim().escape()
];
