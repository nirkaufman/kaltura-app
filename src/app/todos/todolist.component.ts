import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  template: `
    <app-header title="todos"></app-header>
    <app-input (value)="addItem($event)"></app-input>
    <app-list [items]="items"></app-list>
    <app-footer [counter]="items.length"></app-footer>
  `,
})
export class TodolistComponent  {

  public items: any[];

  constructor() {
    this.items = []
  }

  addItem(title) {
    this.items.push({ id: this.items.length + 1, title })
  }

}
