import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { State } from '../reducers';
import { PersonService } from '../services';

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
    private store: Store<State>,
    private service: PersonService
  ) {
    this.active$ = this.service.activeCount();
    this.inactive$ = this.service.inactiveCount();
  }

  ngOnInit() {
  }

}
