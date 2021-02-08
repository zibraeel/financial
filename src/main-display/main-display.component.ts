import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html',
  styleUrls: ['./main-display.component.css']
})
export class MainDisplayComponent implements OnInit {

  constructor() { }

  mockedData = [
    {
      "referenceDate": "Mon Feb 08 2021 18:22:51 GMT+0200 (Eastern European Standard Time)",
      "benchmark1": 0.2892,
      "benchmark2": 0.1678
    },
    {
      "referenceDate": "Mon Feb 08 2021 18:22:51 GMT+0200 (Eastern European Standard Time)",
      "benchmark1": 0.3128,
      "benchmark2": 0.7227
    },
    {
      "referenceDate": "Mon Feb 08 2021 18:22:51 GMT+0200 (Eastern European Standard Time)",
      "benchmark1": 0.7706,
      "benchmark2": 0.4874
    },
    {
      "referenceDate": "Mon Feb 08 2021 18:22:51 GMT+0200 (Eastern European Standard Time)",
      "benchmark1": 0.486,
      "benchmark2": 0.3124
    },
    {
      "referenceDate": "Mon Feb 08 2021 18:22:51 GMT+0200 (Eastern European Standard Time)",
      "benchmark1": 0.1634,
      "benchmark2": 0.2492
    },
    {
      "referenceDate": "Mon Feb 08 2021 18:22:51 GMT+0200 (Eastern European Standard Time)",
      "benchmark1": 0.4854,
      "benchmark2": 0.6688
    },
    {
      "referenceDate": "Mon Feb 08 2021 18:22:51 GMT+0200 (Eastern European Standard Time)",
      "benchmark1": 0.4325,
      "benchmark2": 0.5582
    },
    {
      "referenceDate": "Mon Feb 08 2021 18:22:51 GMT+0200 (Eastern European Standard Time)",
      "benchmark1": 0.6053,
      "benchmark2": 0.4238
    },
    {
      "referenceDate": "Mon Feb 08 2021 18:22:51 GMT+0200 (Eastern European Standard Time)",
      "benchmark1": 0.2627,
      "benchmark2": 0.1349
    },
    {
      "referenceDate": "Mon Feb 08 2021 18:22:51 GMT+0200 (Eastern European Standard Time)",
      "benchmark1": 0.6921,
      "benchmark2": 0.9415
    },
    {
      "referenceDate": "Mon Feb 08 2021 18:22:51 GMT+0200 (Eastern European Standard Time)",
      "benchmark1": 0.7136,
      "benchmark2": 0.3417
    }
  ];
  displayedColumns: string[] = ['referenceDate', 'benchmark1', 'benchmark2'];

  ngOnInit(): void {
  }

}
