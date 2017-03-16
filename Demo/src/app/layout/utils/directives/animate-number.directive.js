"use strict";
var core_1 = require('@angular/core');
var AnimateNumber = (function () {
    function AnimateNumber(el) {
        this.$el = jQuery(el.nativeElement);
    }
    AnimateNumber.prototype.ngOnInit = function () {
        this.$el.animateNumber({
            number: this.$el.text().replace(/ /gi, ''),
            numberStep: jQuery.animateNumber.numberStepFactories.separator(' '),
            easing: 'easeInQuad'
        }, 1000);
    };
    AnimateNumber = __decorate([
        core_1.Directive({
            selector: '[number-animate]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], AnimateNumber);
    return AnimateNumber;
}());
exports.AnimateNumber = AnimateNumber;
//# sourceMappingURL=animate-number.directive.js.map