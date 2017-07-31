import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LoggerService {

  private isEnabled: boolean;

  constructor(flag: boolean, http:HttpClient) {
    this.isEnabled = flag;
  }

  log(value: string){
    this.isEnabled ? console.log(value) : null;
  }

}
