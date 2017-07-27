import {Component, OnInit} from '@angular/core';
import {TodolistService} from './todolist.service';

@Component({
  selector: 'app-todolist',
  template: `
    <section class="todoapp">

      <app-header>
        <app-title></app-title>
        <app-input (valueEnter)="list.addItem($event)" ></app-input>
      </app-header>

      <app-main>
        <app-toggle></app-toggle>
        <app-list [items]="list.items"></app-list>
      </app-main>

      <app-footer>
        <app-counter></app-counter>
        <app-action-button></app-action-button>
      </app-footer>

    </section>
  `
})
export class TodolistComponent implements OnInit {

  public list: TodolistService;

  constructor(list: TodolistService) {
    this.list = list;
  }

  ngOnInit() {
  }

}
