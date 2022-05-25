import { check } from "express-validator";

export const deleteRolePermissionValidation = [
  check("rpCode", "Role permission code is required").notEmpty().trim().escape(),
];