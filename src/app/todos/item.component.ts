import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <li>
      {{ item.id }}
      {{ item.title }}
    </li>
  `,

})
export class ItemComponent  {

  @Input() item: any;

}
