import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <input type="text" (keydown.enter)="value.emit($event.target.value)">
  `,
})
export class InputComponent  {

  @Output() value = new EventEmitter<string>();


}
