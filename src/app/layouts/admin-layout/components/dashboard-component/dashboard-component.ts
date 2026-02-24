import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeartIcon, LucideAngularModule } from 'lucide-angular';
import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexXAxis, NgApexchartsModule } from 'ng-apexcharts';
import { title } from 'process';
import { text } from 'stream/consumers';

export type ChartOptions = {
  series: ApexAxisChartSeries,
  chart: ApexChart,
  xaxis: ApexXAxis,
  title: ApexTitleSubtitle
}

@Component({
  selector: 'app-dashboard-component',
  standalone: true,
  imports: [LucideAngularModule, RouterModule, NgApexchartsModule],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent {

  public chartOptions: Partial<ChartOptions>;
  public genderCharts: any;
  constructor(){
    // emploie du temps
    this.chartOptions = {
      series: [
       { name: "Présents", data: [80, 90, 75, 85, 95] }, 
       { name: "Absents", data: [20, 10, 25, 15, 5] }
      ],
      chart: {
        type: "bar",
        height: 300,
        width: 450

      },
      xaxis: {
        categories: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"]
      },
      title: {
        text: "Assiduite des eleves"
      }
    }
    // pour le genre
    this.genderCharts = {
      series: [300,200],
      chart: {
        type: "donut",
        height: 300,
        width: 450
      },
      labels: ["Garcons", "Filles"],
      colors: ["#3B82F6", "#EC4899"],
      legend: { position: "bottom" }
    }
  }

}
