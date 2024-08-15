
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public title: string = 'Hola soy el title de los Heroes';
  public name:  string = 'IronMan';
  public age:   number = 46;

  get capitalizadName (): string {
    return this.name.toUpperCase();
  }

  getHeroDescription (): string {
    return `${this.name} - ${this.age}`;

  }

  changeHero ():void {
    this.name = "SpiderMan";
  }

  changeAge ():void {
    this.age = 25;
  }

  resetForm ():void {
    this.name = 'IronMan';
    this.age = 45;
  }
}
