"use strict";
var core_1 = require('@angular/core');
var MorrisChart = (function () {
    function MorrisChart(el) {
        this.$el = jQuery(el.nativeElement);
    }
    MorrisChart.prototype.capitalise = function (stringVar) {
        return stringVar.charAt(0).toUpperCase() + stringVar.slice(1).toLowerCase();
    };
    MorrisChart.prototype.render = function () {
        this.$el.css({ height: this.height }); // safari svg height fix
        /* tslint:disable */
        window['Morris'][this.capitalise(this.type)](jQuery.extend({
            element: this.$el[0]
        }, this.options));
        /* tslint:enable */
    };
    MorrisChart.prototype.ngOnInit = function () {
        this.render();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MorrisChart.prototype, "height", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MorrisChart.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MorrisChart.prototype, "options", void 0);
    MorrisChart = __decorate([
        core_1.Directive({
            selector: '[morris-chart]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MorrisChart);
    return MorrisChart;
}());
exports.MorrisChart = MorrisChart;
//# sourceMappingURL=morris.directive.js.map