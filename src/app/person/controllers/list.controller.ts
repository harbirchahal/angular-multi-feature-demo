import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Person } from '../models';
import { State, getAllPersons } from '../reducers';

@Component({
  selector: 'person-list',
  template: `
    <list-page 
      [persons]="persons$ | async"
      (select)="navToDetail($event)"></list-page>
  `,
})
export class ListController implements OnInit {
  persons$: Observable<Person[]>;

  constructor(
    private router: Router,
    private store: Store<State>
  ) {
    this.persons$ = this.store.select(getAllPersons);
  }

  ngOnInit() {
  }

  navToDetail(id: number) {
    this.router.navigate(['person', id]);
  }

}
