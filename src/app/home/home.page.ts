import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {

  @ViewChild('mychart') mychart: any;
  canvas: any;
  ctx: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'bar',
      data: {
          datasets: [{
              label: 'Current Vallue',
              data: [0, 20, 40, 70, 77],
              backgroundColor: "rgb(115 185 243 / 65%)",
              borderColor: "#007ee7",
              fill: true,
          },
          {
            label: 'Invested Amount',
            data: [0, 20, 40, 80],
            backgroundColor: "#47a0e8",
            borderColor: "#007ee7",
            fill: true,
        }],
          labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019', 'Mai']
      },
  });
  }
}
