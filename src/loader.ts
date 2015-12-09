import gui = require('nw.gui');

var win = gui.Window.get();
win.show();

// Add debugger functionality 
window.addEventListener('keyup', e => {
    if (e.keyCode === 123) {
        win.showDevTools();
    }
    if (e.keyCode === 116) {
        location.reload();
    }
});

// Put window in the container so we can use it elsewhere
var container = window.process.mainModule.exports;
container.win = win;