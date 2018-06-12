import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Person } from '../../models';

@Component({
  selector: 'edit-page',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush  
})
export class EditComponent implements OnInit {
  @Input() person: Person;
  @Output() cancel = new EventEmitter<null>();
  @Output() save = new EventEmitter<Person>();

  constructor() { }

  ngOnInit() {
  }

  onCancel() {
    this.cancel.emit();
  }

  onSubmit(form: Person) {
    this.save.emit(form);
  }

}
