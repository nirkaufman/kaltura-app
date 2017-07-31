import {CommonModule} from '@angular/common';
import {NgModule, InjectionToken, Inject} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
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
import {HttpClientModule} from '@angular/common/http';

const URL = new InjectionToken('');

@NgModule({
  imports     : [
      CommonModule,
    SharedModule,
    HttpClientModule],
  providers   : [
    { provide: TodolistService, useClass: TodolistService},
    { provide: URL, useValue: 'http://kaltura/api' },
  ],
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

  constructor(@Inject(URL) url) {
    console.log(url);
  }

}
