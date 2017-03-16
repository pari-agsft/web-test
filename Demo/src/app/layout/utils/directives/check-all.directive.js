"use strict";
var core_1 = require('@angular/core');
var CheckAll = (function () {
    function CheckAll(el) {
        this.$el = jQuery(el.nativeElement);
    }
    CheckAll.prototype.ngOnInit = function () {
        var $el = this.$el;
        $el.on('click', function () {
            $el.closest('table').find('input[type=checkbox]')
                .not(this).prop('checked', jQuery(this).prop('checked'));
        });
    };
    CheckAll = __decorate([
        core_1.Directive({
            selector: '[check-all]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], CheckAll);
    return CheckAll;
}());
exports.CheckAll = CheckAll;
//# sourceMappingURL=check-all.directive.js.map