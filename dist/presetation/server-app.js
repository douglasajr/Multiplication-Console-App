"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerApp = void 0;
const createTable_use_cases_1 = require("../usecases/createTable.use-cases");
const saveFiles_use_cases_1 = require("../usecases/saveFiles-use-cases");
class ServerApp {
    constructor() {
    }
    static execute(options) {
        console.log('Server is Running...');
        const { base, limit, fileName, directory } = options;
        const table = new createTable_use_cases_1.CreateTable().execute(options);
        const archivo = new saveFiles_use_cases_1.SaveFile().execute({ fileName: `${fileName}-${base}`, directory: directory }, table);
        if (options.show)
            console.log(table);
    }
}
exports.ServerApp = ServerApp;
