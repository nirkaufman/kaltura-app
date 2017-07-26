import {Component, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges, AfterViewInit, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-list',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul>
      <app-item *ngFor="let item of viewItems"
                [item]="item"></app-item>
    </ul>
  `
})
export class ListComponent implements OnChanges {

  @Input() items: any[];
  public viewItems: any[];


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
