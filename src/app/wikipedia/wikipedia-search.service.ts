import { Injectable } from '@angular/core';

import { URLSearchParams, Jsonp } from '@angular/http';

//application wide shared Rx operators
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WikipediaSearchService {

    constructor(private jsonp: Jsonp){}

    search (terms: Observable<string>, debounceMs = 400) {
        return terms.debounceTime(debounceMs)
            .distinctUntilChanged()
            //.subscribe(term => this.search(term));
            // .map(term => this.wikipediaSearchService.search(term))
            // .subscribe(obsResut => {
            //     obsResut.subscribe(results => this.items = results);
            // }); // Call to component method which call a service is having 2 subscribe methods which is loosly connect via a method call, since observables are all about composability, so improve our code by providing map and observable of observable of array of strings
            .switchMap(term => this.rawSearch(term)); // when a map has a observable into a observable of observable then flatMap automatically subscribe to this inner observable and flattens them into just a one observable of same type
    }

    rawSearch(term: string) {
        let search = new URLSearchParams();
        search.set('action', 'opensearch');
        search.set('search', term);
        search.set('format', 'json');

        return this.jsonp.get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', {search})
                         .map(response => response.json()[1]);
    }

}
