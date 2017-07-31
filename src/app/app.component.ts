import {Component} from '@angular/core';
import {TodolistService} from './todolist/todolist.service';

@Component({
  selector: 'app-root',
  template: `
    <app-todolist></app-todolist>
    <!--<pre>{{ list.items | json }}</pre>  -->
    <!--<app-todolist></app-todolist>-->
    <!--<app-todolist></app-todolist>-->
  `,
})
export class AppComponent {
  public list: TodolistService;

  constructor(list: TodolistService) {
    this.list = list;
  }


}
