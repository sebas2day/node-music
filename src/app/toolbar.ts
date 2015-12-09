import process = require('../process');

class ToolbarDirective {
    
    static $inject = [];
    constructor() {
        
        return {
            link: (scope: ng.IScope, element: JQuery, iAttrs, controller) => {
                var win = process.getWindow();
                console.log('kaka');

                var startX: number,
                    startY: number,
                    startMouseX: number,
                    startMouseY: number;

                element.bind('mousedown', e => {
                startX = win.x;
                    startY = win.y;
                    startMouseX = e.clientX;
                    startMouseY = e.clientY;
                });

                //$(window).bind('mousemove', e => {
                //    var x = startX + e.clientX - startMouseX;
                //    var y = startY + e.clientY - startMouseY;
                //    win.moveTo(x, y);
                //});
            }
        }
    }
}

export = ToolbarDirective