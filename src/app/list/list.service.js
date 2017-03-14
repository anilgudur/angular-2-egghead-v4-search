"use strict";
// import { Injectable } from "@angular/core";
// @Injectable()
var ListService = (function () {
    function ListService() {
        this.items = [
            { id: 0, name: 'Pascal Precht', country: 'Germany' },
            { id: 1, name: 'Christoph Burgdorf', country: 'Germany' },
            { id: 2, name: 'Thomos Burleson - Anil', country: 'United States' }
        ];
    }
    ListService.prototype.getItems = function () {
        return this.items;
    };
    return ListService;
}());
exports.ListService = ListService;
//# sourceMappingURL=list.service.js.map