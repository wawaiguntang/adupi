import { check } from "express-validator";
import { model } from "../../../../models/index.js";

export const registrasiMitraValidation = [
  check("nama", "Nama tidak boleh kosong").notEmpty().trim().escape(),
  check("nik", "NIK tidak boleh kosong").notEmpty().trim().escape(),
  check("nik", "NIK harus 16 karakter")
    .isLength({ min: 16, max: 16 })
    .trim()
    .escape(),
  check("nik", "NIK harus berisi angka").isDecimal().trim().escape(),
  check("nik").custom((value) => {
    return model.adupi.mitra.findOne({ where: { nik: value } }).then((nik) => {
      if (nik) {
        return Promise.reject("NIK sudah digunakan");
      }
    });
  }),
  check("noHp", "No HP tidak boleh kosong").notEmpty().trim().escape(),
  check("noHp", "No HP harus berisi angka").isDecimal().trim().escape(),
  check("noHp").custom((value) => {
    return model.adupi.mitra
      .findOne({ where: { noHp: value } })
      .then((noHp) => {
        if (noHp) {
          return Promise.reject("No HP sudah digunakan");
        }
      });
  }),
  check("jenisKelamin", "Jenis kelamin tidak boleh kosong")
    .notEmpty()
    .trim()
    .escape(),
  check("jenisKelamin", "Jenis kelamin harus berisi laki-laki atau perempuan")
    .isIn(["L", "P"])
    .trim()
    .escape(),
  check("wilayahCode", "Wilayah tidak boleh kosong").notEmpty().trim().escape(),
  check("jenisMitra", "Jenis mitra tidak boleh kosong")
    .notEmpty()
    .trim()
    .escape(),
  check(
    "jenisMitra",
    "Jenis mitra harus berisi 'PT', 'CV', 'UD', 'KOPERASI', 'BANK SAMPAH INDUK'"
  )
    .isIn(["PT", "CV", "UD", "KOPERASI", "BANK SAMPAH INDUK"])
    .trim()
    .escape(),
  check("tempatLahir", "Tempat lahir tidak boleh kosong")
    .notEmpty()
    .trim()
    .escape(),
  check("tanggalLahir", "Tanggal lahir tidak boleh kosong")
    .notEmpty()
    .trim()
    .escape(),
  check("ktp", "KTP tidak boleh kosong").notEmpty().trim().escape(),
  check("alamat", "Alamat tidak boleh kosong").notEmpty().trim().escape(),
  check("email", "Email tidak boleh kosong").notEmpty().trim().escape(),
  check("email", "Email tidak valid")
    .isEmail()
    .trim()
    .escape()
    .normalizeEmail(),
  check("email").custom((value) => {
    return model.managementUser.user
      .findOne({ where: { email: value } })
      .then((email) => {
        if (email) {
          return Promise.reject("Email sudah digunakan");
        }
      });
  }),
  check("password", "Password tidak boleh kosong").notEmpty().trim().escape(),
];
