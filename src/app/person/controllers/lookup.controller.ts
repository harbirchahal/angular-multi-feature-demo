import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Person, PSearch } from '../models';
import { Search } from '../actions';
import { State, getSearchQuery, getSearchResult } from '../reducers';

@Component({
  selector: 'person-lookup',
  template: `
    <lookup-page 
      [query]="query$ | async"
      (apply)="searchPerson($event)"></lookup-page>
    <list-page 
      [persons]="result$ | async"
      (select)="navToDetail($event)"></list-page>
  `,
})
export class LookupController implements OnInit {
  query$: Observable<PSearch>;
  result$: Observable<Person[]>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<State>
  ) {
    this.query$ = this.store.select(getSearchQuery);
    this.result$ = this.store.select(getSearchResult);
  }

  ngOnInit() {
  }

  navToDetail(id: number) {
    this.router.navigate(['person', id]);
  }

  searchPerson(q: PSearch) {
    this.store.dispatch(new Search(q));
  }

}
