import fs from "fs";

interface SaveFileUseCase {
    execute: (options: Options, contet: string) => boolean
}

interface Options {
    fileName?: string,
    directory?: string,
    content: string
}
export class SaveFile implements SaveFileUseCase {
    constructor() {

    }

    execute({ fileName = 'table', directory = 'outputs', content }: Options) {

        try {
            fs.mkdirSync(directory, { recursive: true })
            fs.writeFileSync(`${directory}/${fileName}.txt`, content)
            console.log('Archivo Creado Exitosamente!!')
            return true
        } catch (error) {
            // console.log(error)
            return false
        }

    }
} 