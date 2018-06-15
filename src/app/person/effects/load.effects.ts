import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';

import { PersonService } from '../services';
import {
  ActionTypes,
  Load,
  LoadSuccess,
  LoadFailure
} from '../actions';
import { State, getLoadPaginator } from '../reducers';

@Injectable()
export class LoadEffects {
  
  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType<Load>(ActionTypes.Load),
    withLatestFrom(this.store.select(getLoadPaginator)),
    map(([action, paginator]) => {
      let payload = action.payload;
      if (!payload) {
        payload = {
          pageIndex: paginator.pageIndex,
          pageSize: paginator.pageSize
        };
      }
      return payload;
    }),
    switchMap((options) => this.personService.load(options)),
    map(result => new LoadSuccess(result)),
    catchError(err => of(new LoadFailure(err)))
  );

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private personService: PersonService
  ) { }

}