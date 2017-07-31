import {Injectable} from '@angular/core';
import {Item} from '../models/item';

@Injectable()
export class TodolistService {
  constructor() {
    this._items = [];
  }

  private _items: Item[];

  public get items(): Item[] {
    return this._items;
  }

  public removeItem(item: Item) {
    const index = this._items.indexOf(item);
    this._items.splice(index, 1);
  }

  public addItem(title: string): void {
    this._items.push(new Item(title));
    // this._items = [...this.items, new Item(title)]
  }

}
