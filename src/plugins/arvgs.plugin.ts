import yargs, { number } from "yargs";
import { hideBin } from 'yargs/helpers';


export const yarg = yargs(hideBin(process.argv),)
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
        if (argv.b < 0) throw Error('base need to be a positive number')
        if (argv.l < 0) throw Error('limit need to be a positive number')
        if (Number.isNaN(argv.b)) throw Error('Base need to be a number')

        return true
    })
    .parseSync()




