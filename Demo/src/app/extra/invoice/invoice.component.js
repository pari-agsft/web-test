"use strict";
var core_1 = require('@angular/core');
var Invoice = (function () {
    function Invoice() {
    }
    Invoice.prototype.print = function () {
        window.print();
    };
    ;
    Invoice = __decorate([
        core_1.Component({
            selector: '[extra-invoice]',
            template: require('./invoice.template.html'),
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [require('./invoice.style.scss')]
        }), 
        __metadata('design:paramtypes', [])
    ], Invoice);
    return Invoice;
}());
exports.Invoice = Invoice;
//# sourceMappingURL=invoice.component.js.map