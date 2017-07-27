import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {TodolistModule} from './todolist/todolist.module';
import { UpPipe } from './shared/up.pipe';
import {SharedModule} from './shared/shared.module';

@NgModule({
  imports     : [BrowserModule, TodolistModule, SharedModule],
  declarations: [AppComponent],
  bootstrap   : [AppComponent]
})

export class AppModule {
}
