import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { Person, PSearch } from '../../models';

@Component({
  selector: 'lookup-page',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LookupComponent implements OnInit, OnChanges {
  qForm: FormGroup;
  @Input() query: PSearch;
  @Input() loading: boolean;
  @Output('apply') search = new EventEmitter<PSearch>();

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.qForm = this.formBuilder.group({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
    }, {
      validator: (form: FormGroup) => {
        if (form.controls['firstname'].value
          || form.controls['lastname'].value
          || form.controls['email'].value) {
            return null;
          }
        return { required: true };
      }
    });
  }

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
    if (this.qForm.valid) {
      this.search.emit(this.qForm.value);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.query) {
      this.qForm.setValue(changes.query.currentValue);
    }
  }
  
  onSubmit() {
    this.search.emit(this.qForm.value);
  }

}
