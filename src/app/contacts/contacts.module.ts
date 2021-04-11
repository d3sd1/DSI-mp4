import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactsRoutingModule} from './contacts-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ContactsComponent} from './contacts.component';
import {MatSortModule} from '@angular/material/sort';
import {CommonPipe} from './common.pipe';
import {TypePipe} from './type.pipe';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    ContactsComponent,
    CommonPipe,
    TypePipe
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule
  ]
})
export class ContactsModule {
}
