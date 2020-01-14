import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: "root"
})
export class AccountService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    })
  };

  constructor(private httpClient: HttpClient, private router: Router) {}

  public login(email: string, password: string) {
    console.log(password);
    const body = new HttpParams()
      .set("grant_type", "password")
      .set("username", email)
      .set("password", password);
    return this.httpClient
      .post<any>(API_URL + "/token", body.toString(), this.httpOptions)
      .subscribe(res => {
        console.log(res);
        localStorage.setItem("access_token", res.access_token);
        this.router.navigate(["/statistics"]);
      });
  }

  get isLoggedIn() {
    let authToken = localStorage.getItem("access_token");
    return authToken !== null ? true : false;
  }
  public getToken() {
    return localStorage.getItem("access_token");
  }
}
