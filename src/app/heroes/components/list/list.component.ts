import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public title: string = " Lista de heroes"
  public heroNames: string[] = ['SpiderMan','IronMan', 'Hulk', 'She Hulk', 'Thor','Pepe' ];
  public deletedHero: string | undefined = '';

  removeLastHero ():void {
    this.deletedHero = this.heroNames.pop()
    console.log(this.deletedHero);


  }

}
