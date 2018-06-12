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
  @Output('apply') search = new EventEmitter<PSearch>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: PSearch) {
    this.search.emit(form);
  }

}
