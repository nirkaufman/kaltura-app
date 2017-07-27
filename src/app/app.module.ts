import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {TodolistModule} from './todolist/todolist.module';

@NgModule({
  imports     : [BrowserModule, TodolistModule],
  declarations: [AppComponent],
  bootstrap   : [AppComponent]
})

export class AppModule {
}
