"use strict";
var core_1 = require('@angular/core');
var Wizard = (function () {
    function Wizard() {
        this.destindationMask = {
            mask: [/[1-9]/, /\d/, /\d/, /\d/, /\d/]
        };
        this.creditMask = {
            mask: [/[1-9]/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
        };
        this.destinationValue = '';
        this.creditValue = '';
    }
    Wizard.prototype.unmask = function (event) {
        return event.replace(/\D+/g, '');
    };
    Wizard.prototype.ngOnInit = function () {
        jQuery('.select2').select2();
    };
    Wizard = __decorate([
        core_1.Component({
            selector: '[forms-wizard]',
            templateUrl: './wizard.template.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['./wizard.style.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], Wizard);
    return Wizard;
}());
exports.Wizard = Wizard;
//# sourceMappingURL=wizard.component.js.map