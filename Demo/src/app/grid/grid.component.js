"use strict";
var core_1 = require('@angular/core');
var GridComponent = (function () {
    function GridComponent() {
        this.sortOptions = {
            connectWith: '.widget-container',
            handle: 'header, .handle',
            cursor: 'move',
            iframeFix: false,
            items: '.widget:not(.locked)',
            opacity: 0.8,
            helper: 'original',
            revert: true,
            forceHelperSize: true,
            placeholder: 'widget widget-placeholder',
            forcePlaceholderSize: true,
            tolerance: 'pointer'
        };
    }
    GridComponent.prototype.ngOnInit = function () {
        jQuery('.widget-container').sortable(this.sortOptions);
    };
    GridComponent = __decorate([
        core_1.Component({
            selector: '[grid]',
            templateUrl: './grid.template.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['./grid.style.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], GridComponent);
    return GridComponent;
}());
exports.GridComponent = GridComponent;
//# sourceMappingURL=grid.component.js.map