"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
// libs
const workspaceUtil_1 = require("./lib/workspaceUtil");
const server_1 = require("./lib/server");
const Util_1 = require("./lib/Util");
// ui
const statusbar_1 = require("./statusbar");
class App {
    constructor(context) {
        this.file = "";
        this.server = new server_1.default(context, this.file);
        workspaceUtil_1.default.workspaceHasHTMLFiles().then(hasHTML => {
            statusbar_1.default.init(context);
        });
    }
    resolveFile(filePath) {
        let _filePath = filePath || "";
        if (!_filePath) {
            _filePath = vscode_1.window.activeTextEditor
                ? vscode_1.window.activeTextEditor.document.fileName
                : "";
        }
        return _filePath;
    }
    onStopLive() {
        vscode_1.window.showInformationMessage("Stopped Preview Server");
    }
    goLive(file) {
        // check workspace
        if (!workspaceUtil_1.default.isWorkspaceValid()) {
            return;
        }
        let _file = file || "";
        _file = this.resolveFile(file);
        if (!_file || !Util_1.default.isHTMLFile(_file)) {
            vscode_1.window.showErrorMessage("File type not supported");
            return;
        }
        this.server.startServer(this.onStopLive, _file);
        statusbar_1.default.toggleStatusBar();
        vscode_1.window.showInformationMessage("Started Preview Server");
    }
    stopLive() {
        this.server.stopServer(this.onStopLive);
        statusbar_1.default.toggleStatusBar();
        vscode_1.window.showInformationMessage("Stopped Preview Server");
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map