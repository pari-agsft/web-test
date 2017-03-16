"use strict";
var core_1 = require('@angular/core');
var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, args) {
        var searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(function (person) {
                if (person.name) {
                    return person.name.search(searchText) !== -1;
                }
            });
        }
    };
    SearchPipe = __decorate([
        core_1.Pipe({
            name: 'SearchPipe'
        }), 
        __metadata('design:paramtypes', [])
    ], SearchPipe);
    return SearchPipe;
}());
exports.SearchPipe = SearchPipe;
//# sourceMappingURL=search-pipe.js.map