/// <reference path="./global.d.ts" />
import gui = require('nw.gui');

var container = window.process.mainModule.exports;

export function init() {
    container.win.show();

    // Add debugger functionality 
    window.addEventListener('keyup', e => {
        if (e.keyCode === 123) {
            container.win.showDevTools();
        }
        if (e.keyCode === 116) {
            location.reload();
        }
    });
}

export function getWindow(): gui.Window {
    return container.win;
}