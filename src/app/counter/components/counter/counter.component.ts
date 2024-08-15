import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

  <h1> Hola soy el counter </h1>
  <p> Tengo {{counter}} USD en el banco.</p>

  <button class="btn btn-primary mx-2" (click)="increaseBy(1)">+1</button>
  <button class="btn btn-primary mx-2" (click)="resetCounter()"> Reset </button>
  <button class="btn btn-primary mx-2"(click)="increaseBy(-1)">-1</button>

  `
})

export class CounterComponent  {
  constructor() { }
  public counter: number = 10;


  increaseBy (value: number):void {
    this.counter += value;

  }

  resetCounter (){
    this.counter = 10;
  }


}
