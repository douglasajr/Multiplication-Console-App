describe('arvgs.plugin', () => {
    const originalArv = process.argv
    beforeEach(() => {
        process.argv = originalArv
        jest.resetModules()
    })
    const runCommand = async (argv: string[]) => {
        process.argv = [...process.argv, ...argv]
        const { yarg } = await import('./arvgs.plugin')

        return yarg
    }

    test('should be return default Values', async () => {
        const argvs = await runCommand(['-b', '7'])
        console.log(argvs)

        expect(argvs).toEqual(expect.objectContaining(
            {
                b: 7,
                l: 12,
                n: 'table',
                d: 'outputs',
                '$0': 'node_modules/.pnpm/jest-worker@30.2.0/node_modules/jest-worker/build/processChild.js'
            }
        ))
    })
    test('should be return ramdom Values', async () => {
        const argvs = await runCommand(['-b', '7', '-s', '-l', '6', '-n', 'multiplication-table'])
        console.log(argvs)

        expect(argvs).toEqual(expect.objectContaining(
            {
                b: 7,
                l: 6,
                n: 'multiplication-table',
                d: 'outputs',
                '$0': 'node_modules/.pnpm/jest-worker@30.2.0/node_modules/jest-worker/build/processChild.js'
            }
        ))
    })
})