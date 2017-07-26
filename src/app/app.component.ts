import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <input [type]="kind" #inputBox>
    <button (click)="changeTitle(inputBox.value)">click me</button>
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

  getFormattedTitle() {
    return this.title.toUpperCase();
  }
}
