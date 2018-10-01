import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class GooglechartService {
  //
  // google: any;
  //
  // constructor() {
  //   this.google.charts.load('current', {'packages':['corechart']});
  // }
  //
  // public buildPieChart(elementId: string, data: any[], config: any) : void {
  //   let chartFunc = () => { return new this.google.visualization.PieChart(document.getElementById(elementId)); };
  //
  //   this.buildChart(data, chartFunc, config);
  // }
  //
  // protected buildChart(data: any[], chartFunc: any, options: any) : void {
  //   let func = (chartFunc, options) => {
  //     let datatable = this.google.visualization.arrayToDataTable(data);
  //     chartFunc().draw(datatable, options);
  //   };
  //   let callback = () => func(chartFunc, options);
  //   this.google.charts.setOnLoadCallback(callback);
  // }
}
