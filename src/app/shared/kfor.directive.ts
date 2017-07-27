import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appKfor]'
})
export class KforDirective {

  private template: TemplateRef<any>;
  private entry: ViewContainerRef;

  @Input()
  set appKforOf(arr) {
    arr.forEach( (item) => {
     this.entry.createEmbeddedView(this.template, {
        $implicit: item,
     });
    })
  }

  constructor(template: TemplateRef<any>, entry: ViewContainerRef) {
    this.template = template;
    this.entry = entry;

  }

}
