import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { VisitorService } from "src/app/services/visitor-service/visitor.service";
import { Router } from "@angular/router";
import { ThrowStmt } from "@angular/compiler";
import { Visitor } from "src/app/models/visitor.model";

@Component({
  selector: "app-visitor-new",
  templateUrl: "./visitor-new.component.html",
  styleUrls: ["./visitor-new.component.css"]
})
export class VisitorNewComponent implements OnInit {
  visitorForm: FormGroup;
  formFirstName: string;
  formLastName: string;
  formVisitType: string;
  formCompany: string;
  formNumberPlate: string;

  constructor(
    private formBuilder: FormBuilder,
    private visitorService: VisitorService,
    private router: Router
  ) {
    this.formFirstName = "firstname";
    this.formLastName = "lastname";
    this.formVisitType = "visittype";
    this.formCompany = "company";
    this.formNumberPlate = "numberplate";
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.visitorForm = this.formBuilder.group({
      firstname: [""],
      lastname: [""],
      visittype: [""],
      company: [""],
      numberplate: [""]
    });
  }

  save() {
    if (!this.visitorForm.valid) return;
    let visitor: Visitor = {
      firstName: this.getFirstName(),
      lastName: this.getLastName(),
      visitType: this.getVisitType(),
      company: this.getCompany(),
      numberPlate: this.getNumberPlate(),
      IsPresent: true,
      Id: 0
    };

    this.visitorService.createVisitor(visitor).subscribe(res => {
      this.router.navigate(["/"]);
    });
  }

  revert() {
    this.visitorForm.reset();
  }

  cancel() {
    this.router.navigate([""]);
  }

  getFirstName() {
    return this.visitorForm.get(this.formFirstName).value;
  }
  getLastName() {
    return this.visitorForm.get(this.formLastName).value;
  }
  getVisitType() {
    return this.visitorForm.get(this.formVisitType).value;
  }
  getCompany() {
    return this.visitorForm.get(this.formCompany).value;
  }
  getNumberPlate() {
    return this.visitorForm.get(this.formNumberPlate).value;
  }
}
