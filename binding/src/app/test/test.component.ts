import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>Welcome {{ name }}</h2>

    <div class="centered-div"><h2>Tutorial 12 - Structural Directives</h2></div>

    <div class="centered-div"><h2>Tutorial 11 - Two Way Binding</h2></div>
    <label>Name to display:</label>
    <input [(ngModel)]="name" type="text" /><br />

    <div class="centered-div"><h2>Tutorial 10</h2></div>

    <input #myInput type="text" />
    <button (click)="logMessage(myInput.value)">Log Value</button>
    <button (click)="logMessage(myInput)">Log Input</button>

    <div class="centered-div"><h2>Tutorial 9</h2></div>
    <button (click)="onClick($event)">Greet</button>
    <button (click)="greeting = 'Welcome Pablo'">Greet 2</button>
    {{ greeting }}

    <div class="centered-div"><h2>Tutorial 1...8</h2></div>
    <h2 [style.color]="hasError ? 'red' : 'gree'">Style Binding</h2>
    <h2 [style.color]="highLightColor">Style Binding 2</h2>
    <h2 [ngStyle]="titleStyle">Style Binding 3</h2>
    <h2 [class]="sucessClass">Tutorial</h2>
    <h2 class="text-special" [class]="sucessClass">Tutorial</h2>
    <h2 [class.text-danger]="hasError">Tutorial</h2>
    <h2 [ngClass]="messageClasses">Tutorial</h2> `,
  styles: [
    `
      .text-success {
        color: green;
      }

      .text-danger {
        color: red;
      }

      .text-special {
        font-style: italic;
      }

      .centered-div {
        text-align: center;
      }
    `,
  ],
})
export class TestComponent implements OnInit {
  public name = '';
  public sucessClass = 'text-success';
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };
  public titleStyle = {
    color: 'blue',
    fontStyle: 'italic',
  };
  public highLightColor = 'orange';

  public greeting = '';
  constructor() {}

  ngOnInit(): void {}

  onClick(event) {
    console.log('onClick on Greet Button');
    console.log(event);
    this.greeting = event.type;
  }

  logMessage(value) {
    console.log(value);
  }
}
