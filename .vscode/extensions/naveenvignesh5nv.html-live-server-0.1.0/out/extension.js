"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const app_1 = require("./app");
const constants_1 = require("./constants");
function activate(context) {
    const app = new app_1.default(context);
    context.subscriptions.push(vscode_1.commands.registerCommand(constants_1.COMMANDS.start, (uri) => {
        var _a;
        app.goLive((_a = uri) === null || _a === void 0 ? void 0 : _a.fsPath);
    }), vscode_1.commands.registerCommand(constants_1.COMMANDS.stop, () => {
        app.stopLive();
    }));
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map