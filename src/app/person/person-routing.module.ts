import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonComponent } from './person.component';
import {
  HomeController,
  AddController,
  ListController,
  EditController
} from './controllers';

const routes: Routes = [
  {
    path: '',
    component: PersonComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeController },
      { path: 'new', component: AddController },
      { path: 'list', component: ListController },
      { path: ':id', component: EditController },
      { path: '**', redirectTo: 'home' }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class PersonRoutingModule { }