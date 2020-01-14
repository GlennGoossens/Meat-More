import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Visit } from "src/app/models/visit.model";
import { environment } from "src/environments/environment";
import { retry, catchError } from "rxjs/operators";
import { AccountService } from "../account-service/account.service";

const API_URL = environment.apiUrl + "/Visit";

@Injectable({
  providedIn: "root"
})
export class VisitService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8"
    })
  };
  authHeader = {
    headers: new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8",
      Authorization: "Bearer " + this.accountService.getToken()
    })
  };
  constructor(
    private httpClient: HttpClient,
    private accountService: AccountService
  ) {}

  public getVisits(): Observable<any[]> {
    return this.httpClient
      .get<any[]>(API_URL, this.authHeader)
      .pipe(retry(1), catchError(this.handleError));
  }

  public getVisitTimes(): Observable<Number[]> {
    return this.httpClient
      .get<Number[]>(API_URL + "/times", this.authHeader)
      .pipe(retry(1), catchError(this.handleError));
  }

  public createVisit(visit: Visit): Observable<Visit> {
    return this.httpClient
      .post<Visit>(API_URL, JSON.stringify(visit), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  public updateVisit(visitorId: Number): Observable<Visit> {
    return this.httpClient
      .put<Visit>(API_URL + "/" + visitorId, this.httpOptions)
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
