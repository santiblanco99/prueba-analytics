import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { CommerceService } from 'src/app/services/commerce.service';
import { Graph } from 'src/app/models/Graph';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  public graphData: Graph[];

  public dataReady: boolean = false;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  prueba: Color = {
    backgroundColor: 'rgba(25,25,25,25)'
  }

  public barChartData: ChartDataSets[] = [
    { data: [], 
      label: 'Sales', 
      backgroundColor:'rgba(84,189,221,1)',
      hoverBackgroundColor: 'rgba(84,189,221,1)',
      borderColor: 'rgba(84,189,221,1)'
    }
  ];

  constructor(private commerceService: CommerceService ) { }

  async ngOnInit() {
    try {
      this.graphData = await this.commerceService.getCommerceGraph().toPromise();
      let data = [];
      let labels = [];
      for(let i = 0; i< this.graphData.length;i++){
        data[i] = this.graphData[i].sales;
        labels[i] = this.graphData[i].name;
      }
      this.barChartData[0].data = data;
      this.barChartLabels = labels;
      this.dataReady = true;
    } catch (error) {
      
    }
    
  }

}
