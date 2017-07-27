import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {UpPipe} from './up.pipe';
import { CountPipe } from './count.pipe';
import { KlIfDirective } from './kl-if.directive';
import { KforDirective } from './kfor.directive';

@NgModule({
  imports     : [CommonModule],
  declarations: [UpPipe, CountPipe, KlIfDirective, KforDirective],
  exports     : [UpPipe, CountPipe, KlIfDirective, KforDirective],
})
export class SharedModule {
}
