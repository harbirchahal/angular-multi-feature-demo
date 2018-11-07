import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

import { Person } from '../models';
import { Select, Update } from '../actions';
import { State, getSelectedPerson } from '../reducers';

@Component({
  selector: 'person-edit',
  template: `
    <edit-page 
      [person]="person$ | async"
      (cancel)="navBack()"
      (save)="updatePerson($event)"></edit-page>
  `,
})
export class EditController implements OnInit {
  person$: Observable<Person>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<State>,
    private location: Location
  ) { }

  ngOnInit() {
    this.person$ = this.route.params.pipe(
      tap(params => this.store.dispatch(new Select(+params['id']))),
      switchMap(() => this.store.select(getSelectedPerson))
    );
  }

  navBack() {
    this.location.back();
  }

  updatePerson(p: Person) {
    this.store.dispatch(new Update(p));
  }

}
