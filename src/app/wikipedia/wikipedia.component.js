"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var wikipedia_search_service_1 = require('./wikipedia-search.service');
//application wide shared Rx operators
//import 'rxjs/add/operator/map';
var WikipediaComponent = (function () {
    function WikipediaComponent(wikipediaSearchService) {
        this.wikipediaSearchService = wikipediaSearchService;
    }
    WikipediaComponent.prototype.search = function (term) {
        var _this = this;
        this.wikipediaSearchService.search(term)
            .subscribe(function (results) { return _this.items = results; });
    };
    WikipediaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wikipedia',
            templateUrl: 'wikipedia.component.html',
            styleUrls: ['app.component.css']
        }), 
        __metadata('design:paramtypes', [wikipedia_search_service_1.WikipediaSearchService])
    ], WikipediaComponent);
    return WikipediaComponent;
}());
exports.WikipediaComponent = WikipediaComponent;
//# sourceMappingURL=wikipedia.component.js.map