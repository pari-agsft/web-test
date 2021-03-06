"use strict";
var core_1 = require('@angular/core');
var app_config_1 = require('../app.config');
var Widgets = (function () {
    function Widgets(config) {
        this.configFn = config;
        this.config = config.getConfig();
    }
    Widgets = __decorate([
        core_1.Component({
            selector: 'widgets',
            templateUrl: './widgets.template.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['./widgets.style.scss']
        }), 
        __metadata('design:paramtypes', [app_config_1.AppConfig])
    ], Widgets);
    return Widgets;
}());
exports.Widgets = Widgets;
//# sourceMappingURL=widgets.component.js.map