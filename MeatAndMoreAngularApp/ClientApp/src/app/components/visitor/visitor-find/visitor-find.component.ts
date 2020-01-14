import { Component, OnInit } from "@angular/core";
import { VisitorService } from "src/app/services/visitor-service/visitor.service";
import { ThrowStmt } from "@angular/compiler";
import { Visitor } from "src/app/models/visitor.model";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { VisitService } from "src/app/services/visit-service/visit.service";
import { Visit } from "src/app/models/visit.model";

@Component({
  selector: "app-visitor-find",
  templateUrl: "./visitor-find.component.html",
  styleUrls: ["./visitor-find.component.css"]
})
export class VisitorFindComponent implements OnInit {
  visitor: Visitor;
  visitorForm: FormGroup;
  formFirstName: string;
  formLastName: string;

  constructor(
    private visitorService: VisitorService,
    private visitService: VisitService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formFirstName = "firstname";
    this.formLastName = "lastname";
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.visitorForm = this.formBuilder.group({
      firstname: [""],
      lastname: [""]
    });
  }
  revert() {
    this.visitorForm.reset();
  }

  cancel() {
    this.router.navigate([""]);
  }

  signIn() {
    if (!this.visitorForm.valid) return;
    console.log("start signing in!");
    this.visitorService
      .findVisitor(this.getFirstName(), this.getLastName())
      .subscribe(
        res => {
          this.visitor = res;
        },
        error => {
          console.log("here is an error");
        },
        () => {
          let visit: Visit = {
            Id: 0,
            VisitorId: this.visitor.Id,
            StartDate: new Date(),
            EndDate: new Date()
          };
          this.visitService.createVisit(visit).subscribe(res => {
            this.router.navigate(["/"]);
          });
        }
      );
  }

  getFirstName() {
    return this.visitorForm.get(this.formFirstName).value;
  }
  getLastName() {
    return this.visitorForm.get(this.formLastName).value;
  }
}
