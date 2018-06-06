import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Person } from '../models';
import { PersonService } from '../services';

@Component({
  selector: 'person-edit',
  template: `
    <edit-page 
      [person]="person$ | async"
      (cancel)="navToList()"
      (save)="updatePerson($event)"></edit-page>
  `,
})
export class EditController implements OnInit {
  private person$: Observable<Person>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private personService: PersonService
  ) { }

  ngOnInit() {
    this.person$ = this.route.params.pipe(
      switchMap(params => this.personService.find(+params['id']))
    );
  }

  navToList() {
    this.router.navigate(['person', 'list']);
  }

  updatePerson(p: Person) {
    this.personService.update(p).subscribe();
  }

}
