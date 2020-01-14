import { Component, OnInit } from "@angular/core";
import { VisitorService } from "src/app/services/visitor-service/visitor.service";

@Component({
  selector: "app-visitor-list",
  templateUrl: "./visitor-list.component.html",
  styleUrls: ["./visitor-list.component.css"]
})
export class VisitorListComponent implements OnInit {
  private visitors = [];

  constructor(private visitorService: VisitorService) {}

  ngOnInit() {
    this.loadVisitors();
    console.log(this.visitors);
  }

  loadVisitors() {
    this.visitorService.getPresentVisitors().subscribe((res: any[]) => {
      console.log(res);
      this.visitors = res;
    });
  }
}
