import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TodolistComponent} from './todolist.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { TitleComponent } from './title/title.component';
import { InputComponent } from './input/input.component';
import { ToggleComponent } from './toggle/toggle.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { CounterComponent } from './counter/counter.component';
import { ActionButtonComponent } from './action-button/action-button.component';

@NgModule({
  imports     : [CommonModule],
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
