import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonComponent } from './person.component';
import {
  HomeController,
  AddController,
  ListController,
  EditController,
  LookupController
} from './controllers';
import {
  LoadPeopleGuard,
  LoadPeopleResolver
} from './guards';

const routes: Routes = [
  {
    path: '',
    component: PersonComponent,
    // canActivate: [ LoadPeopleGuard ],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeController },
      { path: 'new', component: AddController },
      { path: 'list', component: ListController },
      { path: 'lookup', component: LookupController },
      { path: ':id', component: EditController },
      { path: '**', redirectTo: 'home' }
    ],
    resolve: { loaded: LoadPeopleResolver }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    // LoadPeopleGuard,
    LoadPeopleResolver
  ]
})
export class PersonRoutingModule { }