import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnChanges {
  config = {
    type: 'doughnut',
    legend: true,
    labels: ['Active', 'Inactive'],
    data: [],
  };
  @Input() active: number;
  @Input() inactive: number;

  constructor() { }

  get total() {
    return this.active + this.inactive;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.active) {
      this.active = changes.active.currentValue;
    }
    if (changes.inactive) {
      this.inactive = changes.inactive.currentValue;
    }
    this.config.data = [this.active, this.inactive];
  }

  onHover(e) {}

  onClick(e) {}

}
