import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ActionButtonComponent} from './action-button/action-button.component';
import {CounterComponent} from './counter/counter.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {InputComponent} from './input/input.component';
import {ItemComponent} from './item/item.component';
import {ListComponent} from './list/list.component';
import {MainComponent} from './main/main.component';
import {TitleComponent} from './title/title.component';
import {TodolistComponent} from './todolist.component';
import {TodolistService} from './todolist.service';
import {ToggleComponent} from './toggle/toggle.component';

@NgModule({
  imports     : [CommonModule],
  providers   : [TodolistService],
  declarations: [
    TodolistComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    TitleComponent,
    InputComponent,
    ToggleComponent,
    ListComponent,
    ItemComponent,
    CounterComponent,
    ActionButtonComponent],
  exports     : [TodolistComponent]
})
export class TodolistModule {
}
