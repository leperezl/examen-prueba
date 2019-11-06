import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HerodetailComponent } from "../hero/herodetail/herodetail.component"

const routes: Routes = [
  {
    path: 'heroes',
    children: [{
    
    path: ':id',
    component: HerodetailComponent,
    outlet: 'bottom'
  }
  
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }