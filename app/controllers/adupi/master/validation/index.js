import { addJenisSampahValidation } from "./jenisSampah/add.js";
import { editJenisSampahValidation } from "./jenisSampah/edit.js";
import { deleteJenisSampahValidation } from "./jenisSampah/delete.js";

export const validation = {
    jenisSampah: {
        addJenisSampahValidation,
        editJenisSampahValidation,
        deleteJenisSampahValidation,
    }
};