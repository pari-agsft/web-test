"use strict";
var core_1 = require('@angular/core');
Dropzone.autoDiscover = false;
var DropzoneDemo = (function () {
    function DropzoneDemo(el) {
        this.$el = jQuery(el.nativeElement);
        this.$el.addClass('dropzone');
    }
    DropzoneDemo.prototype.ngOnInit = function () {
        var dropzone = new Dropzone(this.$el[0], {});
    };
    DropzoneDemo = __decorate([
        core_1.Directive({
            selector: '[dropzone-demo]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], DropzoneDemo);
    return DropzoneDemo;
}());
exports.DropzoneDemo = DropzoneDemo;
//# sourceMappingURL=dropzone.directive.js.map