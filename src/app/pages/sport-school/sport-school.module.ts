import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportSchoolRoutingModule } from './sport-school-routing.module';
import { SportSchoolComponent } from './components/sport-school.component';

@NgModule({
  imports: [
    CommonModule,
    SportSchoolRoutingModule
  ],
  declarations: [
    SportSchoolComponent
  ]
})
export class SportSchoolModule { }
