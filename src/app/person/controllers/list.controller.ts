import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Person, Page } from '../models';
import { State, getAllPersons, getLoadPaginator } from '../reducers';
import { Load } from '../actions';

@Component({
  selector: 'person-list',
  template: `
    <list-page 
      [persons]="persons$ | async"
      (select)="navToDetail($event)"></list-page>
    <paginate
      [paginator]="paginator$ | async"
      (page)="loadNextPage($event)"></paginate>
  `,
})
export class ListController implements OnInit {
  persons$: Observable<Person[]>;
  paginator$: Observable<Page>;

  constructor(
    private router: Router,
    private store: Store<State>
  ) {
    this.persons$ = this.store.select(getAllPersons);
    this.paginator$ = this.store.select(getLoadPaginator);
  }

  ngOnInit() {
  }

  navToDetail(id: number) {
    this.router.navigate(['person', id]);
  }

  loadNextPage(event: PageEvent) {
    this.store.dispatch(new Load(event));
  }
}
