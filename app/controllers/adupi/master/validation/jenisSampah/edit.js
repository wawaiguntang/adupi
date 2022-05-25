import { check } from "express-validator";

export const editJenisSampahValidation = [
  check("jsCode", "Kode jenis samapah tidak boleh kosong").notEmpty().trim().escape(),
  check("jenis", "Jenis tidak boleh kososng").notEmpty().trim().escape()
];
