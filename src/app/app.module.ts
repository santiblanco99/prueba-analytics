import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { MapComponent } from './components/map/map.component';
import { ChartsModule } from 'ng2-charts';
import { DonutSalesChartComponent } from './components/donut-sales-chart/donut-sales-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    MapComponent,
    DonutSalesChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
