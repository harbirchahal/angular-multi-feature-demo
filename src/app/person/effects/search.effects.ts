import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError, tap } from 'rxjs/operators';

import { PersonService } from '../services';
import {
  ActionTypes,
  Search,
  SearchInitiated,
  SearchComplete,
  SearchError
} from '../actions';
import { State } from '../reducers';

@Injectable()
export class SearchEffects {
  
  @Effect()
  search$: Observable<Action> = this.actions$.pipe(
    ofType<Search>(ActionTypes.Search),
    tap(action => {
      return this.store.dispatch(new SearchInitiated(action.payload))
    }),
    switchMap(action => {
      return this.personService.find(action.payload)
    }),
    map(result => new SearchComplete(result)),
    catchError(err => of(new SearchError(err)))
  );

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private personService: PersonService
  ) { }

}