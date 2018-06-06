import { Component, OnInit, Input } from '@angular/core';

import { Person } from '../models';
import { PersonService } from '../services';

@Component({
  selector: 'person-home',
  template: `
    <home-page></home-page>
  `,
})
export class HomeController implements OnInit {

  constructor(
    private personService: PersonService
  ) { }

  ngOnInit() {
  }

}
