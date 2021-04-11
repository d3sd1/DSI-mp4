import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleComponent } from './single.component';
import {SingleRoutingModule} from './single-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    SingleComponent
  ],
  imports: [
    CommonModule,
    SingleRoutingModule,
    MatExpansionModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class SingleModule { }
