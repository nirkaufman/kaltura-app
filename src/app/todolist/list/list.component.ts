import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {Item} from '../../models/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {

  @Input() items: Item[];

}
