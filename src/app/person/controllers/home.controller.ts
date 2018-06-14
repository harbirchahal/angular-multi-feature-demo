import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { State, getActivePersonsCount, getInactivePersonsCount } from '../reducers';

@Component({
  selector: 'person-home',
  template: `
    <home-page
      [active]="active$ | async"
      [inactive]="inactive$ | async"></home-page>
  `,
})
export class HomeController implements OnInit {
  active$: Observable<number>;
  inactive$: Observable<number>;

  constructor(
    private store: Store<State>
  ) {
    this.active$ = this.store.select(getActivePersonsCount);
    this.inactive$ = this.store.select(getInactivePersonsCount);
  }

  ngOnInit() {
  }

}
