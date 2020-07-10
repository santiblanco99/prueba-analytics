import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet, monkeyPatchChartJsTooltip, monkeyPatchChartJsLegend } from 'ng2-charts';
import { CommerceService } from 'src/app/services/commerce.service';

@Component({
  selector: 'app-donut-sales-chart',
  templateUrl: './donut-sales-chart.component.html',
  styleUrls: ['./donut-sales-chart.component.css']
})
export class DonutSalesChartComponent implements OnInit {

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

  async ngOnInit() {
    try {
      let commerceData = await this.commerceService.getCommerces().toPromise();
      let salesData = [];

      //set labels and data
      for(let i = 0; i< commerceData.length;i++){
        this.pieChartLabels[i] = commerceData[i].name;
        console.log(commerceData[i].sales)
        salesData[i] = commerceData[i].sales;
      }
      this.pieChartData = salesData;
      this.dataReady = true;

    } catch (error) {
      console.log(error);
      
    }
    
  }
}
