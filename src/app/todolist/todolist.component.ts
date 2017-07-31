import {Component, OnInit, SkipSelf, Self, Optional, Injector, ReflectiveInjector} from '@angular/core';
import {TodolistService} from './todolist.service';

@Component({
  selector : 'app-todolist',
  providers: [TodolistService],
  template : `
    <section class="todoapp">

      <app-header>
        <app-title></app-title>
        <app-input (valueEnter)="addItem($event)"></app-input>
      </app-header>

      <app-main>
        <app-toggle></app-toggle>
        <app-list [items]="list.items"></app-list>
      </app-main>

      <app-footer>
        <app-counter [count]="list.items | count:'completed':true"></app-counter>
        <app-action-button></app-action-button>
      </app-footer>

    </section>
  `
})
export class TodolistComponent  {

  public list: TodolistService;
  private master: TodolistService;

  constructor(@Self() list: TodolistService,
              @SkipSelf() master:TodolistService) {
    this.list = list;
    this.master = master;
  }

  addItem(title){
    this.list.addItem(title);
    this.master.addItem(title);
  }

}
