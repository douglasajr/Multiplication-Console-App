"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveFile = void 0;
const fs_1 = __importDefault(require("fs"));
class SaveFile {
    constructor() {
    }
    execute(options, content) {
        const { fileName, directory } = options;
        try {
            fs_1.default.mkdirSync(directory, { recursive: true });
            fs_1.default.writeFileSync(`${directory}/${fileName}.txt`, content);
            console.log('Archivo Creado Exitosamente!!');
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
}
exports.SaveFile = SaveFile;
