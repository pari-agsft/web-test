"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var ErrorComponent = (function () {
    function ErrorComponent(router) {
        this.router = router;
    }
    ErrorComponent.prototype.searchResult = function () {
        this.router.navigate(['/app', 'extra', 'search']);
    };
    ErrorComponent = __decorate([
        core_1.Component({
            selector: 'error',
            styleUrls: ['./error.style.scss'],
            templateUrl: './error.template.html',
            encapsulation: core_1.ViewEncapsulation.None,
            host: {
                class: 'error-page app'
            },
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ErrorComponent);
    return ErrorComponent;
}());
exports.ErrorComponent = ErrorComponent;
//# sourceMappingURL=error.component.js.map