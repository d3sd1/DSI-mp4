import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SingleComponent} from './single.component';
import {ContactsComponent} from '../contacts.component';

const routes: Routes = [
  {
    path: ':id',
    component: SingleComponent,
  },
  {
    path: '',
    redirectTo: '/contacts/list',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SingleRoutingModule {
}
