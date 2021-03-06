"use strict";
var core_1 = require('@angular/core');
var ProgressAnimate = (function () {
    function ProgressAnimate(el) {
        this.$el = jQuery(el.nativeElement);
    }
    ProgressAnimate.prototype.ngOnInit = function () {
        var width = this.$el.data('width'), $bar = this.$el;
        $bar.css('opacity', 0);
        setTimeout(function () {
            $bar.css({
                transition: 'none',
                width: 0,
                opacity: 1
            });
            setTimeout(function () {
                $bar.css('transition', '').css('width', width);
            });
        });
    };
    ProgressAnimate = __decorate([
        core_1.Directive({
            selector: '[progress-animate]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ProgressAnimate);
    return ProgressAnimate;
}());
exports.ProgressAnimate = ProgressAnimate;
//# sourceMappingURL=progress-animate.directive.js.map