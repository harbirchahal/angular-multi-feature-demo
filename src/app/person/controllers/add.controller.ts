import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Person } from '../models';
import { PersonService } from '../services';

@Component({
  selector: 'person-add',
  template: `
    <add-page
      (cancel)="navToList()"
      (save)="addPerson($event)"></add-page>
  `,
})
export class AddController implements OnInit {

  constructor(
    private router: Router,
    private personService: PersonService
  ) { }

  ngOnInit() {
  }

  navToList() {
    this.router.navigate(['person', 'list']);
  }

  addPerson(p: Person) {
    this.personService.add(p).subscribe();
  }

}
