import fs from "fs";

interface SaveFileUseCase {
    execute: (options: Options, contet: string) => boolean
}

interface Options {
    fileName: string,
    directory: string
}
export class SaveFile implements SaveFileUseCase {
    constructor() {

    }

    execute(options: Options, content: string) {
        const { fileName, directory } = options

        try {
            fs.mkdirSync(directory, { recursive: true })
            fs.writeFileSync(`${directory}/${fileName}.txt`, content)
            console.log('Archivo Creado Exitosamente!!')
            return true
        } catch (error) {
            console.log(error)
            return false
        }

    }
} 