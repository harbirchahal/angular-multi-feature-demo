import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Person } from '../models';
import { PersonService } from '../services';

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
    private personService: PersonService
  ) {
    this.persons$ = this.personService.load();
  }

  ngOnInit() {
  }

  navToDetail(id: number) {
    this.router.navigate(['person', id]);
  }

}
