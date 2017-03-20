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
var Subject_1 = require('rxjs/Subject'); // consuming-events-as-observables - Proxy user input through Observable Subject
require('rxjs/add/operator/map');
require('rxjs/add/operator/debounceTime'); // debouncing-the-user-input - Catch last notification by applying debounceTime operator with a milisecond delay
require('rxjs/add/operator/distinctUntilChanged'); // preventing-unnecessary-requests - Need an operator 'distinctUntilChanged' for a subsequent duplicate notification
//import 'rxjs/add/operator/mergeMap'; // flatMap is alias of mergeMap
require('rxjs/add/operator/switchMap'); // flatMap is alias of mergeMap
var WikipediaComponent = (function () {
    function WikipediaComponent(wikipediaSearchService) {
        this.wikipediaSearchService = wikipediaSearchService;
        this.term$ = new Subject_1.Subject();
    }
    WikipediaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wikipediaSearchService.search(this.term$)
            .subscribe(function (results) { return _this.items = results; });
    };
    WikipediaComponent = __decorate([
        // flatMap is alias of mergeMap
        core_1.Component({
            moduleId: module.id,
            selector: 'wikipedia',
            templateUrl: 'wikipedia.component.html',
        }), 
        __metadata('design:paramtypes', [wikipedia_search_service_1.WikipediaSearchService])
    ], WikipediaComponent);
    return WikipediaComponent;
}());
exports.WikipediaComponent = WikipediaComponent;
//# sourceMappingURL=wikipedia.component.js.map