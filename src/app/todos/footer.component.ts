import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <h5>{{ counter }}</h5>
    </footer>
  `
})
export class FooterComponent  {

  @Input() counter: number;

}
