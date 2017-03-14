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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var WikipediaSearchService = (function () {
    function WikipediaSearchService(jsonp) {
        this.jsonp = jsonp;
    }
    WikipediaSearchService.prototype.search = function (term) {
        var search = new http_1.URLSearchParams();
        search.set('action', 'opensearch');
        search.set('search', term);
        search.set('format', 'json');
        return this.jsonp.get('http://en.wikipedia.org/w/api.php?callback-JSON_CALLBACK', { search: search })
            .map(function (response) { return response.json()[1]; });
    };
    WikipediaSearchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Jsonp])
    ], WikipediaSearchService);
    return WikipediaSearchService;
}());
exports.WikipediaSearchService = WikipediaSearchService;
//# sourceMappingURL=wikipedia-search.service.js.map