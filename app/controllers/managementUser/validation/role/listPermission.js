import { check } from "express-validator";

export const listPermissionValidation = [
  check("roleCode", "Role code is required").notEmpty().trim().escape(),
];