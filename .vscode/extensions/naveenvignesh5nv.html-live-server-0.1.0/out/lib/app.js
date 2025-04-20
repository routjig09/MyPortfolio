"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const path = require("path");
// libs
const server_1 = require("./server");
// constants
const constants_1 = require("./../constants");
class App {
    constructor(context) {
        this.isLive = false;
        this.context = context;
        this.initialiseServer(this.getFileSrc());
    }
    getFileSrc() {
        let src = '';
        if (vscode_1.window.activeTextEditor) {
            src = vscode_1.window.activeTextEditor.document.uri.fsPath;
        }
        return src;
    }
    initialiseServer(filePath) {
        // server config
        const _serverConfig = {
            host: constants_1.IP,
            port: constants_1.PORT,
            root: path.dirname(filePath),
            file: path.basename(filePath),
        };
        this.server = new server_1.default(_serverConfig);
    }
    toggleLive() {
        this.isLive = !this.isLive;
    }
    goLive() {
        this.toggleLive();
        if (this.isLive) {
            this.server.startServer();
        }
    }
    stopLive() {
        this.server.stopServer();
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map