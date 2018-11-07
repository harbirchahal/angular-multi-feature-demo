import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Person } from '../models';
import { Create } from '../actions';
import { State } from '../reducers';

@Component({
  selector: 'person-add',
  template: `
    <add-page
      (cancel)="navBack()"
      (save)="addPerson($event)"></add-page>
  `,
})
export class AddController implements OnInit {

  constructor(
    private router: Router,
    private store: Store<State>,
    private location: Location
  ) { }

  ngOnInit() {
  }

  navBack() {
    this.location.back();
  }

  addPerson(p: Person) {
    this.store.dispatch(new Create(p));
  }

}
