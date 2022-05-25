import { check } from "express-validator";

export const listPermissionUserValidation = [
  check("userCode", "User code is required").notEmpty().trim().escape(),
];