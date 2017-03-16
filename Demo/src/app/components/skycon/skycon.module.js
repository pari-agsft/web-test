"use strict";
var core_1 = require('@angular/core');
var scycon_directive_1 = require('./scycon.directive');
var SkyconsModule = (function () {
    function SkyconsModule() {
    }
    SkyconsModule = __decorate([
        core_1.NgModule({
            declarations: [
                scycon_directive_1.Skycon
            ],
            exports: [
                scycon_directive_1.Skycon
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SkyconsModule);
    return SkyconsModule;
}());
exports.SkyconsModule = SkyconsModule;
//# sourceMappingURL=skycon.module.js.map