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
var WikipediaComponent = (function () {
    function WikipediaComponent(wikipediaSearchService) {
        this.wikipediaSearchService = wikipediaSearchService;
        this.term$ = new Subject_1.Subject();
    }
    WikipediaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.term$
            .debounceTime(400)
            .distinctUntilChanged()
            .map(function (term) { return _this.wikipediaSearchService.search(term); })
            .subscribe(function (obsResut) {
            obsResut.subscribe(function (results) { return _this.items = results; });
        }); // Call to component method which call a service is having 2 subscribe methods which is loosly connect via a method call, since observables are all about composability, so improve our code by providing map and observable of observable of array of strings
    };
    WikipediaComponent = __decorate([
        // preventing-unnecessary-requests - Need an operator 'distinctUntilChanged' for a subsequent duplicate notification
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