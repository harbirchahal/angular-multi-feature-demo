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
import { PersonEffects } from './effects';
import {
  HomeComponent,
  AddComponent,
  ListComponent,
  EditComponent
} from './components';
import {
  HomeController,
  AddController,
  ListController,
  EditController
} from './controllers';
import { reducer } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    MaterialModule,
    PersonRoutingModule,
    StoreModule.forFeature('person', reducer),
    EffectsModule.forFeature([PersonEffects])
  ],
  declarations: [
    PersonComponent,
    HomeComponent,
    AddComponent,
    ListComponent,
    EditComponent,
    HomeController,
    AddController,
    ListController,
    EditController,
    AddComponent
  ],
  providers: [
    PersonService
  ],
  exports: []
})
export class PersonModule { }
