import { SaveFile } from "./saveFiles-use-cases"
import fs from "fs";

describe('SaveFile', () => {
    afterEach(() => {
        const folderExist = fs.existsSync('outputs')
        if (folderExist) fs.rmSync('outputs', { recursive: true })

        const folderExistCustom = fs.existsSync('customOuitputs')
        if (folderExistCustom) fs.rmSync('customOuitputs', { recursive: true })
    })
    test('should be save file with default values', () => {
        const values = {
            content: 'test Expect',
        }
        const path = 'outputs/table.txt'


        const saveFile = new SaveFile()
        const createFile = saveFile.execute(values)

        expect(createFile).toBe(true)

        const checkFile = fs.existsSync(path)

        expect(checkFile).toBe(true)

        const textContent = fs.readFileSync(path, { encoding: 'utf-8' })

        expect(textContent).toBe(values.content)


    })
    test('should be save file with custom values', () => {
        const values = {
            fileName: 'custom-values',
            directory: 'customOuitputs',
            content: 'custom values',
        }

        const path = `${values.directory}/${values.fileName}.txt`

        const saveFile = new SaveFile()
        const createFile = saveFile.execute(values)
        expect(createFile).toBe(true)

        const checkFile = fs.existsSync(path)

        expect(checkFile).toBe(true)

        const textContent = fs.readFileSync(path, { encoding: 'utf-8' })

        expect(textContent).toBe(values.content)

    })
    test('should be return fale and directory could not created', () => {

        const mkdirSpyon = jest.spyOn(fs, 'mkdirSync').mockImplementation(
            () => { throw new Error('this is a message from testing') }
        )

        const saveFile = new SaveFile()
        const createFile = saveFile.execute({ content: 'hola' })
        expect(createFile).toBe(false)

        mkdirSpyon.mockRestore()
    })

    test('should be return fale and file could not created', () => {

        const writeFileSpyon = jest.spyOn(fs, 'writeFileSync').mockImplementation(
            () => { throw new Error('this is a message from testing') }
        )

        const saveFile = new SaveFile()
        const createFile = saveFile.execute({ content: 'hola' })
        expect(createFile).toBe(false)

        writeFileSpyon.mockRestore()
    })

})