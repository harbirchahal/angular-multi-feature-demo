import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '../material';

import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person.component';
import { PersonService } from './services';
import { effects } from './effects';
import {
  HomeComponent,
  AddComponent,
  ListComponent,
  EditComponent,
  LookupComponent,
  PaginateComponent
} from './components';
import {
  HomeController,
  AddController,
  ListController,
  EditController,
  LookupController
} from './controllers';
import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    MaterialModule,
    PersonRoutingModule,
    StoreModule.forFeature('person', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [
    PersonComponent,
    HomeComponent,
    AddComponent,
    ListComponent,
    EditComponent,
    LookupComponent,
    HomeController,
    AddController,
    ListController,
    EditController,
    LookupController,
    PaginateComponent
  ],
  providers: [
    PersonService
  ],
  exports: []
})
export class PersonModule { }
