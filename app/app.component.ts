import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <div><h1>{{pageTitle}}</h1>
        <div>Hello i am new to angular 2</div>
        </div>
    `
})
export class AppComponent { 
    pageTitle: string = `My Name is Niraj Kumar`;
 }
