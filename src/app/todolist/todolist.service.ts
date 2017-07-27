import {Injectable} from '@angular/core';
import {Item} from '../models/item';

@Injectable()
export class TodolistService {
  private _items: Item[];

  constructor() {
    this._items = [];
  }

  public get items(): Item[] {
    return this._items;
  }

  public addItem(title: string): void {
    this._items.push(new Item(title));
    // this._items = [...this.items, new Item(title)]
  }

}
