import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { PersonService } from '../services';
import {
  ActionTypes,
  Load,
  LoadSuccess,
  LoadFailure
} from '../actions';

@Injectable()
export class LoadEffects {
  
  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType<Load>(ActionTypes.Load),
    switchMap(() => this.personService.load()),
    map(persons => new LoadSuccess(persons)),
    catchError(err => of(new LoadFailure(err)))
  );

  constructor(
    private actions$: Actions,
    private personService: PersonService
  ) { }

}