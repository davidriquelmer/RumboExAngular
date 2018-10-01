import { Injectable } from '@angular/core';

declare var google: any;

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class GooglechartService {

  constructor() {
    google.charts.load('current', {'packages':['corechart']});
  }

  public buildPieChart(elementId: string, data: any[], config: any) : void {
    let chartFunc = () => { return new google.visualization.PieChart(document.getElementById(elementId)); };
    this.buildChart(data, chartFunc, config);
  }

  public buildGauge(elementId: string, data: any[], config: any) : void {
    let chartFunc = () => { return new google.visualization.Gauge(document.getElementById(elementId)); };
    this.buildChart(data, chartFunc, config);
  }

  protected buildChart(data: any[], chartFunc: any, options: any) : void {
    let func = (chartFunc, options) => {
      let datatable = google.visualization.arrayToDataTable(data);
      chartFunc().draw(datatable, options);
    };
    let callback = () => func(chartFunc, options);
    google.charts.setOnLoadCallback(callback);
  }
}
