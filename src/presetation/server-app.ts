

interface Options {
    base: number,
    limit: number,
    show?: boolean
}


export class ServerApp {
    constructor() {

    }

    static execute(options: Options) {
        console.log(options);

        console.log('Server is Running...');

    }
}