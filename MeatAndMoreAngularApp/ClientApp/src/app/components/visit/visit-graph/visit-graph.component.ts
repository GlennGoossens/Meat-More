import { Component, OnInit, ElementRef } from "@angular/core";
import { VisitService } from "src/app/services/visit-service/visit.service";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";
import * as Chart from "chart.js";

@Component({
  selector: "app-visit-graph",
  templateUrl: "./visit-graph.component.html",
  styleUrls: ["./visit-graph.component.css"]
})
export class VisitGraphComponent implements OnInit {
  constructor(private visitService: VisitService) {}

  visitTimes = [];
  barChartOptions: ChartOptions = {
    responsive: true
  };
  barChartLabels: Label[] = ["0-1", "1-2", "2-3", "3-4", ">4"];
  barChartType: ChartType = "bar";
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], label: "Visit Times", backgroundColor: "rgba(200, 16, 46, 1)" }
  ];

  ngOnInit() {
    this.loadVisits();
  }

  loadVisits() {
    this.visitService.getVisitTimes().subscribe(
      (res: any[]) => {
        this.visitTimes = res;
      },
      error => {
        console.log("here is an error");
      },
      () => {
        this.barChartData = [
          {
            data: this.visitTimes,
            label: "Visit Times",
            backgroundColor: "rgba(207, 0, 15, 1)"
          }
        ];
      }
    );
  }
}
