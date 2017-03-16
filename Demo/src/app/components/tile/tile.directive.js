"use strict";
var core_1 = require('@angular/core');
var LiveTile = (function () {
    function LiveTile(el) {
        this.$el = jQuery(el.nativeElement);
    }
    LiveTile.prototype.ngOnInit = function () {
        this.$el
            .css('height', this.$el.data('height'))
            .liveTile();
    };
    LiveTile = __decorate([
        core_1.Directive({
            selector: '[live-tile]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], LiveTile);
    return LiveTile;
}());
exports.LiveTile = LiveTile;
//# sourceMappingURL=tile.directive.js.map