import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <ul>
      <app-item *ngFor="let item of items"
                [item]="item"></app-item>
    </ul>
  `
})
export class ListComponent {

  @Input() items: any[];

}
