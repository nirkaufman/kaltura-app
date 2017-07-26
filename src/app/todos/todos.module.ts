import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FooterComponent} from './footer.component';
import {HeaderComponent} from './header.component';
import {InputComponent} from './input.component';
import {ItemComponent} from './item.component';
import {ListComponent} from './list.component';
import {TodolistComponent} from './todolist.component';

@NgModule({
  imports     : [CommonModule],
  declarations: [
    TodolistComponent,
    HeaderComponent,
    InputComponent,
    ListComponent,
    ItemComponent,
    FooterComponent],
  exports     : [TodolistComponent]
})
export class TodosModule {
}
