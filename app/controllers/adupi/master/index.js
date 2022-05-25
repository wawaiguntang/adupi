import { getAllJenisSampah, addJenisSampah, editJenisSampah, deleteJenisSampah } from "./jenisSampah.js";
import { validation } from "./validation/index.js";

export const master = {
  jenisSampah: {
    getAllJenisSampah,
    addJenisSampah,
    editJenisSampah,
    deleteJenisSampah,
    validation: validation,
  },
};
