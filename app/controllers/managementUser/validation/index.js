import { oneRoleValidation } from "./role/one.js";
import { addRoleValidation } from "./role/add.js";
import { editRoleValidation } from "./role/edit.js";
import { deleteRoleValidation } from "./role/delete.js";
import { addRolePermissionValidation } from "./role/addPermission.js";
import { deleteRolePermissionValidation } from "./role/deletePermission.js";
import { listPermissionValidation } from "./role/listPermission.js";

import { oneUserValidation } from "./user/one.js";
import { addUserValidation } from "./user/add.js";
import { editUserValidation } from "./user/edit.js";
import { deleteUserValidation } from "./user/delete.js";
import { addRoleUserValidation } from "./user/addRole.js";
import { deleteRoleUserValidation } from "./user/deleteRole.js";
import { listRoleValidation } from "./user/listRole.js";
import { addUserPermissionValidation } from "./user/addPermission.js";
import { deleteUserPermissionValidation } from "./user/deletePermission.js";
import { listPermissionUserValidation } from "./user/listPermissionUser.js";

import { onePermissionValidation } from "./permission/one.js";
import { allPermissionByModuleValidation } from "./permission/allByModule.js";

export const validation = {
  role: {
    oneRoleValidation,
    addRoleValidation,
    editRoleValidation,
    deleteRoleValidation,
    addRolePermissionValidation,
    deleteRolePermissionValidation,
    listPermissionValidation,
  },
  user: {
    oneUserValidation,
    addUserValidation,
    editUserValidation,
    deleteUserValidation,
    addRoleUserValidation,
    deleteRoleUserValidation,
    listRoleValidation,
    addUserPermissionValidation,
    deleteUserPermissionValidation,
    listPermissionUserValidation,
  },
  permission: {
    onePermissionValidation,
    allPermissionByModuleValidation,
  },
};
