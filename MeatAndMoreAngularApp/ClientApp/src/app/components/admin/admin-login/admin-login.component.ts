import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { AccountService } from "src/app/services/account-service/account.service";
import { Router } from "@angular/router";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-admin-login",
  templateUrl: "./admin-login.component.html",
  styleUrls: ["./admin-login.component.css"]
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;
  formEmail: string;
  formPassword: string;

  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formEmail = "email";
    this.formPassword = "password";
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: [""],
      password: [""]
    });
  }
  revert() {
    this.loginForm.reset();
  }

  cancel() {
    this.router.navigate([""]);
  }

  signIn() {
    if (!this.loginForm.valid) return;
    this.accountService.login(this.getEmail(), this.getPassword());
  }

  getEmail() {
    return this.loginForm.get(this.formEmail).value;
  }
  getPassword() {
    return this.loginForm.get(this.formPassword).value;
  }
}
