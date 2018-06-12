import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Person, PSearch } from '../models';

@Injectable()
export class PersonService {
  DATA: Person[] = [
    { id: 1, firstname: 'Phil', lastname: 'Dyer', email: 'phil.dyer@gmail.com', isActive: true },
    { id: 2, firstname: 'Victoria', lastname: 'Smith', email: 'victoria.smith@gmail.com', isActive: true },
    { id: 3, firstname: 'Jacob', lastname: 'Brown', email: 'jacob.brown@gmail.com', isActive: true },
    { id: 4, firstname: 'Stephanie', lastname: 'Cameron', email: 'stephanie.cameron@gmail.com', isActive: true },
    { id: 5, firstname: 'Dominic', lastname: 'Lyman', email: 'dominic.lyman@gmail.com', isActive: true },
    { id: 6, firstname: 'James', lastname: 'Fraser', email: 'james.fraser@gmail.com', isActive: true },
    { id: 7, firstname: 'Pippa', lastname: 'Johnston', email: 'pippa.johnston@gmail.com', isActive: true },
    { id: 8, firstname: 'Rachel', lastname: 'Carr', email: 'rachel.carr@gmail.com', isActive: true },
    { id: 9, firstname: 'Claire', lastname: 'Anderson', email: 'claire.anderson@gmail.com', isActive: false },
    { id: 10, firstname: 'Diane', lastname: 'Hughes', email: 'diane.hughes@gmail.com', isActive: false }
  ];

  constructor() { }

  load(): Observable<Person[]> {
    return of(this.DATA);
  }

  find(query: PSearch): Observable<Person[]> {
    // ToDo: case-insensitive search
    return of(this.DATA
      .map(p => p)
      .filter(p => {
        return (
          query.firstname && p.firstname.includes(query.firstname)
          || query.lastname && p.lastname.includes(query.lastname)
          || query.email && p.email.includes(query.email)
        );
      })
    );
  }
  
  create(person: Person): Observable<Person> {
    person.id = this.DATA.length + 1;
    person.isActive = false;
    this.DATA.unshift(person);
    return of(person);
  }

  update(person: Person): Observable<Person> {
    const index = this.DATA.findIndex((p => p.id === person.id));
    this.DATA[index] = person;
    return of(person);
  }

}