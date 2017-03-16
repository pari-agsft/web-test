"use strict";
var core_1 = require('@angular/core');
var app_config_1 = require('../app.config');
var Dashboard = (function () {
    function Dashboard(config) {
        this.config = config.getConfig();
    }
    Dashboard.prototype.ngOnInit = function () {
        var now = new Date();
        this.month = now.getMonth() + 1;
        this.year = now.getFullYear();
    };
    Dashboard = __decorate([
        core_1.Component({
            selector: 'dashboard',
            templateUrl: './dashboard.template.html',
            styleUrls: ['./dashboard.style.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [app_config_1.AppConfig])
    ], Dashboard);
    return Dashboard;
}());
exports.Dashboard = Dashboard;
//# sourceMappingURL=dashboard.component.js.map