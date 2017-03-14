// import { Injectable } from "@angular/core";
// @Injectable()
export class ListService {
    items:Array<any> = [
        { id:0, name:'Pascal Precht', country:'Germany' },
        { id:1, name:'Christoph Burgdorf', country:'Germany' },
        { id:2, name:'Thomos Burleson - Anil', country:'United States' }
    ];

    getItems() {
        return this.items;
    }
}