import { registrasiMitraValidation } from "./mitra/registrasiMitra.js";
import { addFasilitatorValidation } from "./fasilitator/add.js";
import { editFasilitatorValidation } from "./fasilitator/edit.js";
import { oneFasilitatorValidation } from "./fasilitator/one.js";

export const validation = {
    mitra: {
        registrasiMitraValidation,
    },
    fasilitator:{
        addFasilitatorValidation,
        editFasilitatorValidation,
        oneFasilitatorValidation,
    }
};