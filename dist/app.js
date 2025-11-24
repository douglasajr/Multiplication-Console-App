"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arvgs_plugin_1 = require("./plugins/arvgs.plugin");
const server_app_1 = require("./presetation/server-app");
(() => {
    const { b: base, l: limit, s: show, d: directory, n: fileName } = arvgs_plugin_1.yarg;
    server_app_1.ServerApp.execute({ base, limit, show, fileName, directory });
})();
