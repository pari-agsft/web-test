"use strict";
var core_1 = require('@angular/core');
require('morris.js/morris.js');
var morris_directive_1 = require('./morris.directive');
var MorrisChartModule = (function () {
    function MorrisChartModule() {
    }
    MorrisChartModule = __decorate([
        core_1.NgModule({
            declarations: [
                morris_directive_1.MorrisChart
            ],
            exports: [
                morris_directive_1.MorrisChart
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MorrisChartModule);
    return MorrisChartModule;
}());
exports.MorrisChartModule = MorrisChartModule;
//# sourceMappingURL=morris.module.js.map