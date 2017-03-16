"use strict";
var core_1 = require('@angular/core');
var Validation = (function () {
    function Validation() {
    }
    Validation.prototype.ngOnInit = function () {
        jQuery('.parsleyjs').parsley();
    };
    Validation = __decorate([
        core_1.Component({
            selector: '[forms-validation]',
            templateUrl: './validation.template.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['./validation.style.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], Validation);
    return Validation;
}());
exports.Validation = Validation;
//# sourceMappingURL=validation.component.js.map