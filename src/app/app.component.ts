import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <input [type]="kind"
           #inputBox>
    <button (click)="changeTitle(inputBox.value)">click me</button>

    <input type="checkbox"
           (change)="child.toggle()">

    <app-child [content]="title"
               (toggleMe)="log($event)"
               #child></app-child>

  `,
})
export class AppComponent {

  public title: string;
  public kind = 'text';

  constructor() {
    this.title = 'Angular Application';
  }

  changeTitle(value) {
    this.title = value;
  }

  log(event) {
    console.log(event);
    // console.log("VVVVVV");
  }

}
