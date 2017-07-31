import {Component, OnInit, Input} from '@angular/core';
import {Item} from '../../models/item';
import {TodolistService} from '../todolist.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent  {
  @Input() item: Item;

  public list: TodolistService;

  constructor(list: TodolistService) {
    this.list = list;
  }

  getClass() {
    return {
      completed: this.item.completed
    }
  }
}
