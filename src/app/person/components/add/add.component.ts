import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Person } from  '../../models';

@Component({
  selector: 'add-page',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddComponent implements OnInit {
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
