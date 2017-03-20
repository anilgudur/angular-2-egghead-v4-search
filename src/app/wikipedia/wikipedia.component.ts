import { Component, OnInit } from '@angular/core';

import { WikipediaSearchService } from './wikipedia-search.service';

//application wide shared Rx operators
import { Subject } from 'rxjs/Subject'; // consuming-events-as-observables - Proxy user input through Observable Subject
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime'; // debouncing-the-user-input - Catch last notification by applying debounceTime operator with a milisecond delay
import 'rxjs/add/operator/distinctUntilChanged'; // preventing-unnecessary-requests - Need an operator 'distinctUntilChanged' for a subsequent duplicate notification

@Component({
    moduleId: module.id,
    selector: 'wikipedia',
    templateUrl: 'wikipedia.component.html',
    //styleUrls: ['wikipedia.component.css'],
})
export class WikipediaComponent {
    items:Array<string>;
    private term$ = new Subject<string>();
    constructor(private wikipediaSearchService: WikipediaSearchService){}

    ngOnInit(): void {
        this.term$
            .debounceTime(400)
            .distinctUntilChanged()
            //.subscribe(term => this.search(term));
            .map(term => this.wikipediaSearchService.search(term))
            .subscribe(obsResut => {
                obsResut.subscribe(results => this.items = results);
            }) // Call to component method which call a service is having 2 subscribe methods which is loosly connect via a method call, since observables are all about composability, so improve our code by providing map and observable of observable of array of strings
    }

    // search(term: string) {
    //     this.wikipediaSearchService.search(term)
    //                                .subscribe(results => this.items = results);
    // }
}
