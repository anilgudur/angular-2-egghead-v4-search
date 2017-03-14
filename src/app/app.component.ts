import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <list-component></list-component>
  `,
})
export class AppComponent  { name = 'Angular'; }
