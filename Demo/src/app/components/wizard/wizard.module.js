"use strict";
var core_1 = require('@angular/core');
var wizard_directive_1 = require('./wizard.directive');
var BootstrapWizardModule = (function () {
    function BootstrapWizardModule() {
    }
    BootstrapWizardModule = __decorate([
        core_1.NgModule({
            declarations: [
                wizard_directive_1.BootstrapWizard
            ],
            exports: [
                wizard_directive_1.BootstrapWizard
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], BootstrapWizardModule);
    return BootstrapWizardModule;
}());
exports.BootstrapWizardModule = BootstrapWizardModule;
//# sourceMappingURL=wizard.module.js.map