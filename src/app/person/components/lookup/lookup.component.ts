import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { PSearch } from '../../models';

@Component({
  selector: 'lookup-page',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LookupComponent implements OnInit {
  @Input() query: PSearch;
  @Input() loading: boolean;
  @Output('apply') search = new EventEmitter<PSearch>();

  constructor() { }

  get verboseQuery() {
    let asString = [];
    if (this.query.firstname) {
      asString.push(`First Name like "${this.query.firstname}"`);
    }
    if (this.query.lastname) {
      asString.push(`Last Name like "${this.query.lastname}"`);
    }
    if (this.query.email) {
      asString.push(`Email like "${this.query.email}"`);
    }
    return asString.join(' OR ');
  }

  ngOnInit() {
  }

  onSubmit(form: PSearch) {
    this.search.emit(form);
  }

}
