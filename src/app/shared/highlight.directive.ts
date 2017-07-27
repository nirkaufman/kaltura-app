import {Directive, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input()
  public highlight: string;

  @HostBinding('style.background')
  public background;

  @HostListener('mouseenter')
  public mark(){
    this.background = this.highlight;
  }

  @HostListener('mouseleave')
  public clear(){
    this.background = '';
  }
}
