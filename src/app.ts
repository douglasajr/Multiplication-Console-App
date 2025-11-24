import { yarg } from "./plugins/arvgs.plugin"
import { ServerApp } from "./presetation/server-app"



(() => {
    const { b: base, l: limit, s: show, d: directory, n: fileName } = yarg
    ServerApp.execute({ base, limit, show, fileName, directory })
})()
