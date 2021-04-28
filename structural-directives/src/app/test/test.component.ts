import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>NGIF Directive</h2>
    <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
    <ng-template #thenBlock><h2>Tutorial</h2></ng-template>
    <ng-template #elseBlock><h2>Hidden</h2> </ng-template>

    <h2>NGSWITCH Directive</h2>
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'" [style.color]="color">
        You picked red color
      </div>
      <div *ngSwitchCase="'blue'" [style.color]="color">
        You picked blue color
      </div>
      <div *ngSwitchCase="'green'" [style.color]="color">
        You picked green color
      </div>
      <div *ngSwitchDefault>Pick again</div>
    </div>

    <h2>NGFOR Directive</h2>
    <div
      *ngFor="let color of colors; index as i; first as f; last as l; odd as o"
    >
      <h3 [style.color]="color">
        index:{{ i }} - is First?:{{ f }} - is Last?:{{ l }} - is Odd?:{{
          o
        }}-{{ color }}
      </h3>
    </div>
  `,
  styles: [],
})
export class TestComponent implements OnInit {
  displayName = true;
  color = 'green';
  colors = ['red', 'blue', 'green', 'yellow'];
  constructor() {}
  ngOnInit(): void {}
}
