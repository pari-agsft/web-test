"use strict";
var core_1 = require('@angular/core');
var Skycon = (function () {
    function Skycon(el) {
        this.$el = jQuery(el.nativeElement);
    }
    Skycon.prototype.ngOnInit = function () {
        var icons = new Skycons.Skycons({ 'color': this.color });
        icons.set(this.$el[0], this.weather);
        icons.play();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Skycon.prototype, "color", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Skycon.prototype, "weather", void 0);
    Skycon = __decorate([
        core_1.Directive({
            selector: '[skycon]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Skycon);
    return Skycon;
}());
exports.Skycon = Skycon;
//# sourceMappingURL=scycon.directive.js.map