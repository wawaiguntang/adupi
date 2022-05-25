import { model } from "../../models/index.js";
import db from "../../config/database.js";
import bcrypt from "bcrypt";

export const registerMitra = async (req, res, next) => {
  let transaction;
  try {
    transaction = await db.transaction();
    const passwordHash = await bcrypt.hash(req.body.password, 10);
    const user = await model.managementUser.user.create(
      {
        email: req.body.email,
        password: passwordHash,
      },
      { transaction }
    );

    await model.adupi.mitra.create(
      {
        nama: req.body.nama,
        nik: req.body.nik,
        ktp: req.body.ktp,
        noHp: req.body.noHp,
        jenisKelamin: req.body.jenisKelamin,
        wilayahCode: req.body.wilayahCode,
        jenisMitra: req.body.jenisMitra,
        tempatLahir: req.body.tempatLahir,
        tanggalLahir: req.body.tanggalLahir,
        alamat: req.body.alamat,
        userCode: user.userCode,
        aktif: "1",
      },
      { transaction }
    );

    // validation wilayah masih error
    // const desa = await db.query(
    //   "SELECT * FROM wilayah WHERE LEFT(wilayahCode,8)=? AND CHAR_LENGTH(wilayahCode)=13 ORDER BY wilayah",
    //   {
    //     replacements: [req.body.wilayahCode],
    //     type: QueryTypes.SELECT,
    //     transaction,
    //     raw: true
    //   }
    // );
    // if (desa == null || desa == 'undifined') {
    //   await transaction.rollback();
    //   return res.status(400).json({
    //     status: 400,
    //     message: "Gagal melakukan registrasi",
    //   });
    // }

    await transaction.commit();
    return res.status(200).json({
      status: 200,
      message: "Berhasil melakukan registrasi",
    });
  } catch (err) {
    if (transaction) {
      await transaction.rollback();
      return res.status(400).json({
        status: 400,
        message: "Gagal melakukan registrasi",
      });
    } else {
      return res.status(400).json({
        status: 400,
        message: "Gagal melakukan registrasi",
      });
    }
  }
};
