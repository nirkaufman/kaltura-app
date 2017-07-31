import {Component} from '@angular/core';
import {TodolistService} from './todolist/todolist.service';

@Component({
  selector: 'app-root',
  template: `
    <pre>{{ list.items | json }}</pre>  
    <app-todolist></app-todolist>
    <app-todolist></app-todolist>
    <app-todolist></app-todolist>
  `,
})
export class AppComponent {
  public list: TodolistService;

  constructor(list: TodolistService) {
    this.list = list;
  }


}
