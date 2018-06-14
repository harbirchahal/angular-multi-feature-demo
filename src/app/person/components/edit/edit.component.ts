import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Person } from '../../models';

@Component({
  selector: 'edit-page',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush  
})
export class EditComponent implements OnInit, OnChanges {
  editForm: FormGroup;
  @Input() person: Person;
  @Output() cancel = new EventEmitter<null>();
  @Output() save = new EventEmitter<Person>();

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.editForm = this.formBuilder.group({
      id: new FormControl(0),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl(''),
      isActive: new FormControl(false)
    });
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.person) {
      this.editForm.setValue(changes.person.currentValue);
    }
  }

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.save.emit(this.editForm.value);
  }

}
