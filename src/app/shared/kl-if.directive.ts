import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[appKlIf]'
})
export class KlIfDirective {

  private template: TemplateRef<any>;
  private entry: ViewContainerRef;

  constructor(template: TemplateRef<any>, entry: ViewContainerRef) {
    this.template = template;
    this.entry    = entry;
  }

  @Input()
  set appKlIf(value: boolean) {
    if (value) {
      this.entry.createEmbeddedView(this.template);
    } else {
      this.entry.clear();
    }
  }
}
