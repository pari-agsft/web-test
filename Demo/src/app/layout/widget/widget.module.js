"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var widget_directive_1 = require('./widget.directive');
var WidgetModule = (function () {
    function WidgetModule() {
    }
    WidgetModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [widget_directive_1.Widget],
            exports: [widget_directive_1.Widget]
        }), 
        __metadata('design:paramtypes', [])
    ], WidgetModule);
    return WidgetModule;
}());
exports.WidgetModule = WidgetModule;
//# sourceMappingURL=widget.module.js.map