import {Component, OnInit, Input} from '@angular/core';
import {Item} from '../../models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent  {
  @Input() item: Item;

  getClass() {
    return {
      completed: this.item.completed
    }
  }
}
