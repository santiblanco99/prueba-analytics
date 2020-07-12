import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet, monkeyPatchChartJsTooltip, monkeyPatchChartJsLegend } from 'ng2-charts';
import { CommerceService } from 'src/app/services/commerce.service';
import { Commerce } from 'src/app/models/Commerce';

@Component({
  selector: 'app-donut-sales-chart',
  templateUrl: './donut-sales-chart.component.html',
  styleUrls: ['./donut-sales-chart.component.css']
})
export class DonutSalesChartComponent implements OnInit {

  @Input() commerceArray: Commerce[];

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];


  constructor(private commerceService: CommerceService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  dataReady = false;

  ngOnInit() {
    if (this.commerceArray) {
      let commerceData = this.commerceArray;
      let salesData = [];

      //set labels and data
      for (let i = 0; i < commerceData.length; i++) {
        this.pieChartLabels[i] = commerceData[i].name;
        salesData[i] = commerceData[i].sales;
      }
      this.pieChartData = salesData;
      this.dataReady = true;
    }
  }

}
