import { Component, OnInit } from "@angular/core";
import { VisitService } from "src/app/services/visit-service/visit.service";

@Component({
  selector: "app-visit-list",
  templateUrl: "./visit-list.component.html",
  styleUrls: ["./visit-list.component.css"]
})
export class VisitListComponent implements OnInit {
  private visits = [];
  constructor(private visitService: VisitService) {}

  ngOnInit() {
    this.loadVisits();
  }

  loadVisits() {
    this.visitService.getVisits().subscribe((res: any[]) => {
      this.visits = res;
    });
  }
}
