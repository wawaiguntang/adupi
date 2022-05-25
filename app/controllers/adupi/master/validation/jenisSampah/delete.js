import { check } from "express-validator";

export const deleteJenisSampahValidation = [
  check("jsCode", "Kode jenis samapah tidak boleh kosong").notEmpty().trim().escape()
];
