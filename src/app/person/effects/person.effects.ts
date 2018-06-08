import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { Person } from '../models';
import { PersonService } from '../services';
import {
  ActionTypes,
  ActionWithPayload,
  CreateSuccess,
  CreateFailure,
  UpdateSuccess,
  UpdateFailure,
  LoadSuccess,
  LoadFailure,
} from '../actions';

@Injectable()
export class PersonEffects {
  
  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType(ActionTypes.Load),
    switchMap(action => this.personService.load()),
    map(persons => new LoadSuccess(persons)),
    catchError(err => of(new LoadFailure(err)))
  );
  
  @Effect()
  create$: Observable<Action> = this.actions$.pipe(
    ofType(ActionTypes.Create),
    switchMap((action: ActionWithPayload) => this.personService.create(action.payload)),
    map(person => new CreateSuccess(person)),
    catchError(err => of(new CreateFailure(err)))
  );

  @Effect()
  update$: Observable<Action> = this.actions$.pipe(
    ofType(ActionTypes.Update),
    switchMap((action: ActionWithPayload) => this.personService.update(action.payload)),
    map(person => new UpdateSuccess(person)),
    catchError(err => of(new UpdateFailure(err)))
  );

  constructor(
    private actions$: Actions,
    private personService: PersonService
  ) { }

}