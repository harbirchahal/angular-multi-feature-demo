import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  config = {
    type: 'doughnut',
    legend: true,
    labels: ['Active', 'Inactive'],
    data: [8, 2],
  };

  constructor() { }

  ngOnInit() {
  }

  onHover(e) {}

  onClick(e) {}

}
