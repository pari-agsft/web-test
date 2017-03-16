"use strict";
var core_1 = require('@angular/core');
var tile_directive_1 = require('./tile.directive');
require('metrojs/release/MetroJs.Full/MetroJs');
var LiveTileModule = (function () {
    function LiveTileModule() {
    }
    LiveTileModule = __decorate([
        core_1.NgModule({
            declarations: [
                tile_directive_1.LiveTile
            ],
            exports: [
                tile_directive_1.LiveTile
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LiveTileModule);
    return LiveTileModule;
}());
exports.LiveTileModule = LiveTileModule;
//# sourceMappingURL=tile.module.js.map