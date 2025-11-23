import { yarg } from "./plugins/arvgs.plugin"
import { ServerApp } from "./presetation/server-app"



(() => {
    const { b: base, l: limit, s: show } = yarg
    ServerApp.execute({ base, limit, show })
})()
