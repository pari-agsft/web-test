"use strict";
var core_1 = require('@angular/core');
var MapsGoogle = (function () {
    function MapsGoogle() {
        this.lat = -37.813179;
        this.lng = 144.950259;
        this.zoom = 12;
    }
    MapsGoogle = __decorate([
        core_1.Component({
            selector: '[maps-google]',
            template: require('./maps-google.template.html'),
            styles: ['sebm-google-map { height: 100% }']
        }), 
        __metadata('design:paramtypes', [])
    ], MapsGoogle);
    return MapsGoogle;
}());
exports.MapsGoogle = MapsGoogle;
//# sourceMappingURL=maps-google.component.js.map