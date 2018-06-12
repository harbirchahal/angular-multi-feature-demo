import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { PersonService } from '../services';
import {
  ActionTypes,
  Create,
  CreateSuccess,
  CreateFailure,
  Update,
  UpdateSuccess,
  UpdateFailure,
  Load,
  LoadSuccess,
  LoadFailure,
} from '../actions';

@Injectable()
export class PersonEffects {
  
  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType<Load>(ActionTypes.Load),
    switchMap(() => this.personService.load()),
    map(persons => new LoadSuccess(persons)),
    catchError(err => of(new LoadFailure(err)))
  );
  
  @Effect()
  create$: Observable<Action> = this.actions$.pipe(
    ofType<Create>(ActionTypes.Create),
    switchMap(action => this.personService.create(action.payload)),
    map(person => new CreateSuccess(person)),
    catchError(err => of(new CreateFailure(err)))
  );

  @Effect()
  update$: Observable<Action> = this.actions$.pipe(
    ofType<Update>(ActionTypes.Update),
    switchMap(action => this.personService.update(action.payload)),
    map(person => new UpdateSuccess(person)),
    catchError(err => of(new UpdateFailure(err)))
  );

  constructor(
    private actions$: Actions,
    private personService: PersonService
  ) { }

}