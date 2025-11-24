import { CreateTable } from "./createTable.use-cases";

describe('createTable', () => {
    test('should be create table', () => {
        const createTable = new CreateTable()
        const table = createTable.execute({ base: 7, limit: 10 })
        const row = table.split('\n').length
        // console.log(table)

        expect(createTable).toBeInstanceOf(CreateTable)
        expect(table).toContain('7 x 10 = 70')
        expect(row).toBe(11)
    })

    test('should be created table with a custom values', () => {
        const opt = {
            base: 5,
            limit: 7
        }
        const createTable = new CreateTable()
        const table = createTable.execute(opt)
        const row = table.split('\n').length

        expect(createTable).toBeInstanceOf(CreateTable)
        expect(table).toContain('5 x 0 = 0')
        expect(row).toBe(opt.limit + 1)

    })
})

