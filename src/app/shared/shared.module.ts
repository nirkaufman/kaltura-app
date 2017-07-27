import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {UpPipe} from './up.pipe';
import { CountPipe } from './count.pipe';

@NgModule({
  imports     : [CommonModule],
  declarations: [UpPipe, CountPipe],
  exports     : [UpPipe, CountPipe],
})
export class SharedModule {
}
