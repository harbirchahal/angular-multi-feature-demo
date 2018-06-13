import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, catchError, tap, filter, take } from 'rxjs/operators';

import { Load } from '../actions';
import { State, getTotalPersons } from '../reducers';

@Injectable()
export class LoadPeopleResolver implements Resolve<Observable<boolean>> {

  constructor(
    private store: Store<State>
  ) {}

  resolve(): Observable<boolean> {
    return this.store.pipe(
      select(getTotalPersons),
      tap(count => {
        if (!count) {
          this.store.dispatch(new Load());
        }
      }),
      filter(count => count > 0),
      take(1),
      map(() => true),
      catchError(() => of(false))
    );
  }

}