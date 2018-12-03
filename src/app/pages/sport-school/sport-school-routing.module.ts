import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SportSchoolComponent} from "./components/sport-school.component";

const routes: Routes = [
    { 
      path: "", 
      component:SportSchoolComponent 
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SportSchoolRoutingModule { }
