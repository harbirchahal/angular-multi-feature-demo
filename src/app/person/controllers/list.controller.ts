import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Person } from '../models';
import { Load } from '../actions';
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
  private persons$: Observable<Person[]>;

  constructor(
    private router: Router,
    private store: Store<State>
  ) {
    this.persons$ = this.store.select(getAllPersons);
  }

  ngOnInit() {
    this.store.dispatch(new Load());
  }

  navToDetail(id: number) {
    this.router.navigate(['person', id]);
  }

}
