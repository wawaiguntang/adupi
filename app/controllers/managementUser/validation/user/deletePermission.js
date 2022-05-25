import { check } from "express-validator";

export const deleteUserPermissionValidation = [
  check("upCode", "User permission code is required").notEmpty().trim().escape(),
];