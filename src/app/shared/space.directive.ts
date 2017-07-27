import {Directive, Output, HostListener, EventEmitter} from '@angular/core';

@Directive({
  selector: '[keydown.space]'
})
export class SpaceDirective {

  @Output('keydown.space')
  public clickEvent = new EventEmitter<any>();

  @HostListener('keydown', ['$event'])
  public fire (event) {
    if(event.keyCode === 32) {
      this.clickEvent.emit();
    }
  }



}
