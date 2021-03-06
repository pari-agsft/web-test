"use strict";
var core_1 = require('@angular/core');
require('jquery-flot');
require('jquery.flot.animator/jquery.flot.animator');
require('jquery-flot/jquery.flot.time.js');
var flot_directive_1 = require('./flot.directive');
var FlotChartModule = (function () {
    function FlotChartModule() {
    }
    FlotChartModule = __decorate([
        core_1.NgModule({
            declarations: [
                flot_directive_1.FlotChart
            ],
            exports: [
                flot_directive_1.FlotChart
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], FlotChartModule);
    return FlotChartModule;
}());
exports.FlotChartModule = FlotChartModule;
//# sourceMappingURL=flot.module.js.map