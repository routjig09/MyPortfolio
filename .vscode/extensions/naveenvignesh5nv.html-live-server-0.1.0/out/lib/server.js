"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const constants_1 = require("./../constants");
const liveServer = require("live-server");
class Server {
    constructor(context, _filePath) {
        this.config = {};
        this.initialiseServer(_filePath);
        this.ctx = context;
    }
    initialiseServer(_filePath) {
        const _serverConfig = {
            host: constants_1.IP,
            port: constants_1.PORT,
            root: path_1.dirname(_filePath),
            file: path_1.basename(_filePath) // thing to updated
        };
        this.config = _serverConfig;
    }
    updateFile(file) {
        this.config = Object.assign(Object.assign({}, this.config), { root: path_1.dirname(file), file: path_1.basename(file) });
    }
    startServer(cb, filePath) {
        const isLive = this.ctx.workspaceState.get(constants_1.STORAGE_KEY) || false;
        if (filePath) {
            this.updateFile(filePath);
            this.stopServer(cb);
        }
        if (isLive) {
            this.stopServer(cb);
        }
        liveServer.start(this.config);
        this.ctx.workspaceState.update(constants_1.STORAGE_KEY, true);
    }
    stopServer(cb) {
        this.ctx.workspaceState.update(constants_1.STORAGE_KEY, false);
        liveServer.shutdown(cb);
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map