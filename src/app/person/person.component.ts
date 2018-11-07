import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { Store } from '@ngrx/store';

import { State } from './reducers';
import { ResetSearch } from './actions';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  navLinks = [
    { link: 'home', label: 'Dashboard', icon: 'dashboard'},
    { link: 'list', label: 'Listing', icon: 'list'},
    { link: 'lookup', label: 'Lookup', icon: 'search'},
    { link: 'new', label: 'Add Person', icon: 'add'},
  ];
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(
    private router: Router,
    private store: Store<State>
  ) { }

  ngOnInit() {
  }

  navigateTo (to: string) {
    this.sidenav.close();
    if (to === 'lookup') {
      this.store.dispatch(new ResetSearch());
    }
    this.router.navigate(['person', to]);
  };

}
