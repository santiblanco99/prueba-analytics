import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutSalesChartComponent } from './donut-sales-chart.component';

describe('DonutSalesChartComponent', () => {
  let component: DonutSalesChartComponent;
  let fixture: ComponentFixture<DonutSalesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonutSalesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutSalesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
