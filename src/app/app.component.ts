import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>DIRECTIVE</h1>

    <h2 *appKlIf="flag">I Am The Content</h2>

    <h2 *appKfor="let color of colors">{{color}}</h2>

    <ng-template appKfor [appKforOf]="colors" let-color>
      <p>{{ color }}</p>
    </ng-template>

  `,
})
export class AppComponent {
  flag = true;

  colors = ['red', 'green', 'blue'];


}
