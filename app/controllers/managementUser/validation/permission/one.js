import { check } from "express-validator";

export const onePermissionValidation = [
  check("permissionCode", "Permission code is required").notEmpty().trim().escape(),
];
