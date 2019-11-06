import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './herolist/herolist.component';
import { HeroService } from './hero.service';
import { HerodetailComponent } from './herodetail/herodetail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule
  ],
  declarations: [HeroListComponent, HerodetailComponent],
  providers: [HeroService],
  exports:[HeroListComponent]
})
export class HeroModule { }