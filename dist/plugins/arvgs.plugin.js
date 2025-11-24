"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.yarg = void 0;
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
exports.yarg = (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    .option('b', {
    alias: 'base',
    type: 'number',
    description: 'Mutiplication table',
    demandOption: true,
})
    .option('l', {
    alias: 'limit',
    type: 'number',
    default: 12,
    description: 'limit Multiplication table',
})
    .option('s', {
    alias: 'show',
    type: 'boolean',
    description: 'show Multiplication table',
})
    .option('n', {
    alias: 'name',
    type: 'string',
    default: 'table',
    description: 'File Name',
})
    .option('d', {
    alias: 'directory',
    type: 'string',
    default: 'outputs',
    description: 'show Multiplication table',
})
    .check((argv, options) => {
    if (argv.b < 0)
        throw Error('base need to be a positive number');
    if (argv.l < 0)
        throw Error('limit need to be a positive number');
    if (Number.isNaN(argv.b))
        throw Error('Base need to be a number');
    return true;
})
    .parseSync();
