import { check } from "express-validator";

export const allPermissionByModuleValidation = [
  check("moduleCode", "Module code is required").notEmpty().trim().escape(),
];
