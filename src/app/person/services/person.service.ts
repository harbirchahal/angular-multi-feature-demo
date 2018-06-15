import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

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
    { id: 10, firstname: 'Diane', lastname: 'Hughes', email: 'diane.hughes@gmail.com', isActive: false },
    { id: 11, firstname: 'Natalie', lastname: 'Johnston', email: 'natalie.johnston@gmail.com', isActive: true },
    { id: 12, firstname: 'Abigail', lastname: 'Manning', email: 'abigail.manning@gmail.com', isActive: false },
    { id: 13, firstname: 'Angela', lastname: 'Coleman', email: 'angela.coleman@gmail.com', isActive: false },
    { id: 14, firstname: 'Andrew', lastname: 'Baker', email: 'andrew.baker@gmail.com', isActive: false },
    { id: 15, firstname: 'Tracey', lastname: 'Howard', email: 'tracey.howard@gmail.com', isActive: true }
  ];

  constructor() { }

  load(options: any): Observable<{data: Person[], options: any}> {
    options['length'] = this.DATA.length;
    const start = options.pageIndex * options.pageSize;
    const end = start + options.pageSize;
    const data = this.DATA.slice(start, end);
    return of({ data, options });
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
    ).pipe(delay(1000));
  }
  
  activeCount(): Observable<number> {
    return of(this.DATA.filter(p => p.isActive).length);
  }

  inactiveCount(): Observable<number> {
    return of(this.DATA.filter(p => !p.isActive).length);
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