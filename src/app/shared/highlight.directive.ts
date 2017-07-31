import {Directive, Input, Renderer2, OnInit, ElementRef, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective  {

  @Input()
  public highlight: string;
  @HostBinding('style.background')
  public background;
  private renderer: Renderer2;


  // constructor(renderer: Renderer2, element:ElementRef) {
  //   this.renderer = renderer;
  //   this.element = element;
  // }
  //
  // ngOnInit(): void {
  //   this.renderer.listen(this.element.nativeElement, 'mouseenter', () => {
  //     this.renderer.setStyle(this.element.nativeElement, 'background', 'yellow');
  //   })
  // }
  private element: ElementRef;

  @HostListener('mouseenter')
  public mark() {
    this.background = this.highlight;
  }

  @HostListener('mouseleave')
  public clear() {
    this.background = '';
  }
}
