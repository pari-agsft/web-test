"use strict";
var core_1 = require('@angular/core');
require('jquery-sparkline');
var sparkline_directive_1 = require('./sparkline.directive');
var JqSparklineModule = (function () {
    function JqSparklineModule() {
    }
    JqSparklineModule = __decorate([
        core_1.NgModule({
            declarations: [
                sparkline_directive_1.JqSparkline
            ],
            exports: [
                sparkline_directive_1.JqSparkline
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], JqSparklineModule);
    return JqSparklineModule;
}());
exports.JqSparklineModule = JqSparklineModule;
//# sourceMappingURL=sparkline.module.js.map