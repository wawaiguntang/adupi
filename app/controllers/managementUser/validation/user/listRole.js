import { check } from "express-validator";

export const listRoleValidation = [
  check("userCode", "User code is required").notEmpty().trim().escape(),
];