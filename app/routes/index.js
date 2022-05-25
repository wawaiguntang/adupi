import express from "express";
import { validate } from "../utils/validate.js";
import { authentication } from "../controllers/authentication/index.js";
import { managementUser } from "../controllers/managementUser/index.js";
import { wilayah } from "../controllers/wilayah/index.js";
import { adupi } from "../controllers/adupi/index.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post(
  "/api/v1/login",
  authentication.validation.loginValidation,
  validate,
  authentication.login
);
router.get("/api/v1/token", authentication.refreshToken);

// management user
// role
router.get(
  "/api/v1/role/all",
  verifyToken(["RROLE"]),
  managementUser.role.getAllRole
);

router.get(
  "/api/v1/role/one",
  verifyToken(["RROLE"]),
  managementUser.validation.role.oneRoleValidation,
  validate,
  managementUser.role.getOneRole
);

router.post(
  "/api/v1/role/add",
  verifyToken(["CROLE"]),
  managementUser.validation.role.addRoleValidation,
  validate,
  managementUser.role.addRole
);
router.put(
  "/api/v1/role/edit",
  verifyToken(["UROLE"]),
  managementUser.validation.role.editRoleValidation,
  validate,
  managementUser.role.editRole
);
router.delete(
  "/api/v1/role/delete",
  verifyToken(["DROLE"]),
  managementUser.validation.role.deleteRoleValidation,
  validate,
  managementUser.role.deleteRole
);

router.get(
  "/api/v1/rolePermission/list",
  verifyToken(["RROLEPERMISSION"]),
  managementUser.validation.role.listPermissionValidation,
  validate,
  managementUser.role.listPermission
);

router.post(
  "/api/v1/rolePermission/add",
  verifyToken(["CROLEPERMISSION"]),
  managementUser.validation.role.addRolePermissionValidation,
  validate,
  managementUser.role.addPermission
);

router.delete(
  "/api/v1/rolePermission/delete",
  verifyToken(["DROLEPERMISSION"]),
  managementUser.validation.role.deleteRolePermissionValidation,
  validate,
  managementUser.role.deletePermission
);

// user
router.get(
  "/api/v1/user/all",
  verifyToken(["RUSER"]),
  managementUser.user.getAllUser
);

router.get(
  "/api/v1/user/one",
  verifyToken(["RUSER"]),
  managementUser.validation.user.oneUserValidation,
  validate,
  managementUser.user.getOneUser
);

router.post(
  "/api/v1/user/add",
  verifyToken(["CUSER"]),
  managementUser.validation.user.addUserValidation,
  validate,
  managementUser.user.addUser
);
router.put(
  "/api/v1/user/edit",
  verifyToken(["UUSER"]),
  managementUser.validation.user.editUserValidation,
  validate,
  managementUser.user.editUser
);
router.delete(
  "/api/v1/user/delete",
  verifyToken(["DUSER"]),
  managementUser.validation.user.deleteUserValidation,
  validate,
  managementUser.user.deleteUser
);

router.get(
  "/api/v1/roleUser/list",
  verifyToken(["RROLEUSER"]),
  managementUser.validation.user.listRoleValidation,
  validate,
  managementUser.user.listRole
);

router.post(
  "/api/v1/roleUser/add",
  verifyToken(["CROLEUSER"]),
  managementUser.validation.user.addRoleUserValidation,
  validate,
  managementUser.user.addRoleUser
);

router.delete(
  "/api/v1/roleUser/delete",
  verifyToken(["DROLEUSER"]),
  managementUser.validation.user.deleteRoleUserValidation,
  validate,
  managementUser.user.deleteRoleUser
);

router.get(
  "/api/v1/userPermission/list",
  verifyToken(["RUSERPERMISSION"]),
  managementUser.validation.user.listPermissionUserValidation,
  validate,
  managementUser.user.listPermissionUser
);

router.post(
  "/api/v1/userPermission/add",
  verifyToken(["CUSERPERMISSION"]),
  managementUser.validation.user.addUserPermissionValidation,
  validate,
  managementUser.user.addPermissionUser
);

router.delete(
  "/api/v1/userPermission/delete",
  verifyToken(["DUSERPERMISSION"]),
  managementUser.validation.user.deleteUserPermissionValidation,
  validate,
  managementUser.user.deletePermissionUser
);

router.get(
  "/api/v1/permission/all",
  verifyToken(["RPERMISSION"]),
  managementUser.permission.getAllPermission
);

router.get(
  "/api/v1/permissionWithModule/list",
  verifyToken(["RPERMISSIONWITHMODULE"]),
  managementUser.permission.getAllPermissionWithModule
);

router.get(
  "/api/v1/permissionByModule/list",
  verifyToken(["RPERMISSIONBYMODULE"]),
  managementUser.validation.permission.allPermissionByModuleValidation,
  validate,
  managementUser.permission.getAllPermissionByModule
);

router.get(
  "/api/v1/permission/one",
  verifyToken(["RPERMISSION"]),
  managementUser.validation.permission.onePermissionValidation,
  validate,
  managementUser.permission.getOnePermission
);

// wilayah
router.post("/api/v1/wilayah/provinsi/all", wilayah.provinsi.getAllProvinsi);

router.post("/api/v1/wilayah/kabupaten/all", wilayah.kabupaten.getAllKabupaten);

router.post("/api/v1/wilayah/kecamatan/all", wilayah.kecamatan.getAllKecamatan);

router.post("/api/v1/wilayah/desa/all", wilayah.desa.getAllDesa);

// adupi
// master
router.get(
  "/api/v1/master/jenisSampah/all",
  verifyToken(["RJENISSAMPAH"]),
  adupi.master.jenisSampah.getAllJenisSampah
);
router.post(
  "/api/v1/master/jenisSampah/add",
  verifyToken(["CJENISSAMPAH"]),
  adupi.master.jenisSampah.validation.jenisSampah.addJenisSampahValidation,
  validate,
  adupi.master.jenisSampah.addJenisSampah
);
router.put(
  "/api/v1/master/jenisSampah/edit",
  verifyToken(["UJENISSAMPAH"]),
  adupi.master.jenisSampah.validation.jenisSampah.editJenisSampahValidation,
  validate,
  adupi.master.jenisSampah.editJenisSampah
);
router.delete(
  "/api/v1/master/jenisSampah/delete",
  verifyToken(["DJENISSAMPAH"]),
  adupi.master.jenisSampah.validation.jenisSampah.deleteJenisSampahValidation,
  validate,
  adupi.master.jenisSampah.deleteJenisSampah
);

// registrasi mitra
router.post(
  "/api/v1/registrasi/mitra",
  adupi.validation.mitra.registrasiMitraValidation,
  validate,
  adupi.mitra.registerMitra
);

router.get("/", () => {
  console.log("test");
});

export default router;
