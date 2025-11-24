import { CreateTable } from "../usecases/createTable.use-cases";
import { SaveFile } from "../usecases/saveFiles-use-cases";



interface Options {
    base: number,
    limit: number,
    show?: boolean,
    fileName: string,
    directory: string
}


export class ServerApp {
    constructor() {

    }

    static execute(options: Options) {
        console.log('Server is Running...')
        const { base, limit, fileName, directory } = options

        const table = new CreateTable().execute(options)
        const archivo = new SaveFile().execute({ fileName: `${fileName}-${base}`, directory: directory }, table)


        if (options.show) console.log(table)

    }
}