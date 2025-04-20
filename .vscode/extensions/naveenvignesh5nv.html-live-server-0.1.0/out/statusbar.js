"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const constants_1 = require("./constants");
class StatusBar {
    static get myStatusBar() {
        if (!StatusBar._myStatusBar) {
            StatusBar._myStatusBar = vscode_1.window.createStatusBarItem(vscode_1.StatusBarAlignment.Right, 100);
            this.myStatusBar.show();
        }
        return StatusBar._myStatusBar;
    }
    static showStart() {
        StatusBar.myStatusBar.text = "Start";
        StatusBar.myStatusBar.color = "green";
        StatusBar.myStatusBar.command = constants_1.COMMANDS.start;
    }
    static showStop() {
        StatusBar.myStatusBar.text = "Stop";
        StatusBar.myStatusBar.color = "red";
        StatusBar.myStatusBar.command = constants_1.COMMANDS.stop;
    }
    static init(ctx) {
        StatusBar.ctx = ctx;
        setTimeout(function () {
            StatusBar.showStart();
        }, 1000);
    }
    static toggleStatusBar() {
        const isLive = StatusBar.ctx.workspaceState.get(constants_1.STORAGE_KEY) || false;
        if (!isLive) {
            StatusBar.showStart();
            return;
        }
        StatusBar.showStop();
    }
    static kill() {
        StatusBar.myStatusBar.dispose();
    }
}
exports.default = StatusBar;
//# sourceMappingURL=statusbar.js.map