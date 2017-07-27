import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector   : 'app-input',
  templateUrl: './input.component.html',
  styleUrls  : ['./input.component.css']
})
export class InputComponent {
  @Output()
  public valueEnter = new EventEmitter<string>();
}
