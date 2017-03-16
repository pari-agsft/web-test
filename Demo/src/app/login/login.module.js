"use strict";
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var login_component_1 = require('./login.component');
exports.routes = [
    { path: '', component: login_component_1.Login, pathMatch: 'full' }
];
var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule.routes = exports.routes;
    LoginModule = __decorate([
        core_1.NgModule({
            declarations: [
                login_component_1.Login
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;
//# sourceMappingURL=login.module.js.map