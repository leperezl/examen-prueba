import { Component, OnInit } from '@angular/core';
import { HeroService } from "../hero.service";
import { Hero } from "../hero";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'herolist',
  templateUrl: './herolist.component.html',
  styleUrls: ['./herolist.component.css']
})
export class HeroListComponent implements OnInit {

//se importa (dos puntos) y declara en el constructor
//ponerle otro nombre qu eno sea la variable
  constructor(private heroesService:HeroService, private router: Router,
    private route: ActivatedRoute) { }

  heroes: Hero[];
  poder: number;

  getHeroes(){
    this.heroesService.getHeroes().subscribe(heroesRet => this.heroes = heroesRet);
    //this.poder = 5;
    console.log("hola");
    console.log(this.heroes);
    
    

  }

  getPoder(){
    var maypod=0;
    console.log(this.heroes);
   for (let i=0; i<this.heroes.length;i++){
       if(this.heroes[i].power>maypod){
          maypod= this.heroes[i].power;
        }

    }
    this.poder = maypod;
  }

  ngOnInit() {
    this.getHeroes();
    this.getPoder();
  }

}