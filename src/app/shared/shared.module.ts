import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CountPipe} from './count.pipe';
import {LoggerService} from './logger.service';
import {UpPipe} from './up.pipe';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  imports     : [CommonModule, HttpClientModule],
  providers   : [
    {
      provide: LoggerService,
      useFactory: (http) => new LoggerService(true, http),
      deps: [HttpClient]
    }
  ],
  declarations: [UpPipe, CountPipe],
  exports     : [UpPipe, CountPipe],
})
export class SharedModule {

  constructor(logger: LoggerService) {
      logger.log('SharedModule')
  }

}
