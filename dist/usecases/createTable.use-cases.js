"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTable = void 0;
class CreateTable {
    constructor() {
    }
    execute(options) {
        const { base, limit } = options;
        let outputText = '';
        for (let i = 0; i <= limit; i++) {
            outputText += `${base} x ${i} = ${base * i}\n`;
        }
        return outputText;
    }
}
exports.CreateTable = CreateTable;
