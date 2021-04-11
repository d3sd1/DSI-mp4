import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleComponent } from './single.component';
import {SingleRoutingModule} from './single-routing.module';



@NgModule({
  declarations: [
    SingleComponent
  ],
  imports: [
    CommonModule,
    SingleRoutingModule
  ]
})
export class SingleModule { }
