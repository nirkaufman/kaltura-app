import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs';
import {Item} from '../models/item';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class TodolistService {
  private http: HttpClient;
  private _items: Observable<Item[]>;

  constructor(http: HttpClient) {
    this.http   = http;
    this._items = this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  public get items(): Observable<Item[]> {
    return this._items;
  }

  public removeItem(item: Item) {
    // const index = this._items.indexOf(item);
    // this._items.splice(index, 1);
  }

  public addItem(title: string): void {
    // this._items.push(new Item(title));
    // this._items = [...this.items, new Item(title)]
  }

}
