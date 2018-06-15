import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material';

import { Page } from '../../models';

@Component({
  selector: 'paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit {

  @Input() paginator: Page;
  @ViewChild('matPaginator') matPaginator: MatPaginator;
  @Output() page = new EventEmitter<PageEvent>();

  constructor() { }

  ngOnInit() {
    this.matPaginator.pageIndex = this.paginator.pageIndex;
  }

  onPage(event: PageEvent) {
    this.page.emit(event);
  }
}
