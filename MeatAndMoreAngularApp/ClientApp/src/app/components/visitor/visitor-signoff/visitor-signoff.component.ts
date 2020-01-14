import { Component, OnInit } from "@angular/core";
import { Visitor } from "src/app/models/visitor.model";
import { FormGroup, FormBuilder } from "@angular/forms";
import { VisitorService } from "src/app/services/visitor-service/visitor.service";
import { VisitService } from "src/app/services/visit-service/visit.service";
import { Router } from "@angular/router";
import { Visit } from "src/app/models/visit.model";

@Component({
  selector: "app-visitor-signoff",
  templateUrl: "./visitor-signoff.component.html",
  styleUrls: ["./visitor-signoff.component.css"]
})
export class VisitorSignoffComponent implements OnInit {
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

  signOff() {
    if (!this.visitorForm.valid) return;
    console.log("start signing off!");
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
          this.visitService.updateVisit(this.visitor.Id).subscribe(res => {
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
