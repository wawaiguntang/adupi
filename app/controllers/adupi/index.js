import { master } from "./master/index.js";
import { registerMitra } from "./mitra.js";
import { validation } from "./validation/index.js";

export const adupi = {
  master: master,
  mitra: {
    registerMitra,
  },
  validation:validation
};
