import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

import { Person } from '../models';

@Injectable()
export class PersonService {
  subject: BehaviorSubject<Person[]> = new BehaviorSubject<Person[]>([]);
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

  constructor() {
    this.subject.next(this.DATA);
  }

  load(): Observable<Person[]> {
    return this.subject.asObservable();
  }

  find(id: number): Observable<Person> {
    return of(this.DATA.find(p => p.id === id));
  }

  add(person: Person): Observable<boolean> {
    person.id = this.DATA.length + 1;
    person.isActive = false;
    this.DATA.unshift(person);
    this.subject.next([...this.DATA]);
    return of(true);
  }

  update(person: Person): Observable<boolean> {
    const index = this.DATA.findIndex((p => p.id === person.id));
    this.DATA[index] = person;
    this.subject.next([...this.DATA]);
    return of(true);
  }

}