import {Item} from '../models/item';
import {Injectable} from '@angular/core';

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
  }
}








