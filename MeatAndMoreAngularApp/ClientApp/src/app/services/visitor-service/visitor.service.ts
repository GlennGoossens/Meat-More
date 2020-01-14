import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Visitor } from "src/app/models/visitor.model";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { AccountService } from "../account-service/account.service";

const API_URL = environment.apiUrl + "/Visitor";

@Injectable({
  providedIn: "root"
})
export class VisitorService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*"
    })
  };
  authHeader = {
    headers: new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8",
      Authorization: "Bearer " + this.accountService.getToken(),
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*"
    })
  };

  constructor(
    private httpClient: HttpClient,
    private accountService: AccountService
  ) {}

  public getPresentVisitors(): Observable<Visitor[]> {
    return this.httpClient
      .get<Visitor[]>(API_URL, this.authHeader)
      .pipe(retry(1), catchError(this.handleError));
  }

  public createVisitor(visitor: Visitor): Observable<Visitor> {
    return this.httpClient
      .post<Visitor>(API_URL, JSON.stringify(visitor), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  public getVisitors(): Observable<Visitor[]> {
    return this.httpClient
      .get<Visitor[]>(API_URL, this.authHeader)
      .pipe(retry(1), catchError(this.handleError));
  }

  public findVisitor(firstName: string, lastName: string): Observable<Visitor> {
    var urlparams = "/find/" + firstName + "/" + lastName;
    return this.httpClient
      .get<Visitor>(API_URL + urlparams)
      .pipe(retry(1), catchError(this.handleError));
  }

  private handleError(error: Response | any) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
