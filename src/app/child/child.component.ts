import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p *ngIf="flag">
      {{ content }}
    </p>
  `,
})
export class ChildComponent {

  @Input()  content: string;
  @Output() toggleMe = new EventEmitter<boolean>();

  public flag = false;

  public toggle() {
    this.flag = !this.flag;
    this.toggleMe.emit(this.flag);
  }
}
