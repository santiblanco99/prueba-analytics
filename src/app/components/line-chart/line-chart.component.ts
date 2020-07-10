import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { CommerceService } from 'src/app/services/commerce.service';
import { Graph } from 'src/app/models/Graph';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  //commerce Graph data to fetch
  public commerceGraph: Graph[];

  //indicates if data finished loading
  public dataReady = false;

  //chart variables
  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Sales' },
  ];
  public lineChartLabels: Label[];
  public lineChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(private commerceService: CommerceService) { }

  async ngOnInit() {

    try {
      this.commerceGraph = await this.commerceService.getCommerceGraph().toPromise();
      let chartData = [];
      let chartLabels = [];
      for(let i = 0; i< this.commerceGraph.length;i++){
        chartData[i] = this.commerceGraph[i].sales;
        chartLabels[i] = this.commerceGraph[i].name;
      } 
      this.lineChartData[0].data = chartData;
      this.lineChartLabels = chartLabels;
      this.dataReady = true;
    } catch (error) {
      console.log(error);
    }

  }

}
