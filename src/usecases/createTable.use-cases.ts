interface CreateTableUseCase {
    execute: (options: Options) => string
}



interface Options {
    base: number,
    limit: number,
    show?: boolean
}


export class CreateTable implements CreateTableUseCase {
    constructor() {

    }

    execute(options: Options) {
        const { base, limit } = options
        let outputText = ''

        for (let i = 0; i <= limit; i++) {

            if (i < limit) {
                outputText += `${base} x ${i} = ${base * i}\n`
            } else {
                outputText += `${base} x ${i} = ${base * i}`
            }
        }

        return outputText
    }

}