/*
 * Angular 2 decorators and services
 */
"use strict";
var core_1 = require('@angular/core');
var app_service_1 = require('./app.service');
/*
 * App Component
 * Top Level Component
 */
var App = (function () {
    function App(appState) {
        this.appState = appState;
    }
    App.prototype.ngOnInit = function () {
        console.log('Initial App State', this.appState.state);
    };
    App = __decorate([
        core_1.Component({
            selector: 'app',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: [
                './scss/application.scss'
            ],
            template: "<router-outlet></router-outlet>"
        }), 
        __metadata('design:paramtypes', [app_service_1.AppState])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.component.js.map