import { Component, OnInit, Input, Output, ViewChild, OnChanges, SimpleChanges, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MatSort, MatTableDataSource, MatTab } from '@angular/material';

import { Person } from '../../models';

@Component({
  selector: 'list-page',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit, OnChanges {
  displayedColumns = ['firstname', 'lastname', 'email', 'status', 'actions'];
  dataSource: MatTableDataSource<Person[]>;

  @Input() persons: Person[];
  @ViewChild(MatSort) sort: MatSort;
  @Output() select = new EventEmitter<number>();

  constructor() {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.persons) {
      this.dataSource.data = changes.persons.currentValue;
    }
  }

  onSelect(id: number) {
    this.select.emit(id);
  }

}
