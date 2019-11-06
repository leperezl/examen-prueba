import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HeroService } from "../hero.service";
import { Hero } from "../hero";
import { HeroDetail } from "../hero-detail";

@Component({
  selector: 'app-herodetail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.css']
})
export class HerodetailComponent implements OnInit {

  constructor(private heroesService:HeroService, private route: ActivatedRoute) { }
  hero: Hero;
  
  heroDetail: HeroDetail;

  getHero(){
    this.heroesService.getHeroes().subscribe(heroesRet => this.hero = heroesRet);
  }
   hero_id: number;

  loader: any;
  /**
  * The method which retrieves the books of an editorial
  */
  getHeroDetail() {

    this.heroesService.getHeroDetail(this.hero_id)
      .subscribe(o => {
        this.heroDetail = o
      });
  }

  onLoad(params) {

    this.hero_id = parseInt(params['id']);
    console.log(" en detail " + this.hero_id);
    this.heroDetail = new HeroDetail();
    this.getHeroDetail();
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}