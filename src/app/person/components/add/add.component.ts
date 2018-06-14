import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Person } from  '../../models';

@Component({
  selector: 'add-page',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddComponent implements OnInit {
  addForm: FormGroup;
  @Output() cancel = new EventEmitter<null>();
  @Output() save = new EventEmitter<Person>();

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.addForm = this.formBuilder.group({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit() {
  }

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.save.emit(this.addForm.value);
  }

}
