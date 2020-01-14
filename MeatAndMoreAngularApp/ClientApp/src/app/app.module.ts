import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient
} from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ChartsModule } from "ng2-charts";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./components/nav-menu/nav-menu.component";
import { HomeComponent } from "./components/home/home.component";
import { VisitorNewComponent } from "./components/visitor/visitor-new/visitor-new.component";
import { VisitorListComponent } from "./components/visitor/visitor-list/visitor-list.component";
import { VisitorSignoffComponent } from "./components/visitor/visitor-signoff/visitor-signoff.component";
import { VisitListComponent } from "./components/visit/visit-list/visit-list.component";
import { VisitorFindComponent } from "./components/visitor/visitor-find/visitor-find.component";
import { StatisticsComponent } from "./components/statistics/statistics.component";
import { VisitGraphComponent } from "./components/visit/visit-graph/visit-graph.component";
import { AdminLoginComponent } from "./components/admin/admin-login/admin-login.component";
import { AuthInterceptor } from "./helpers/authconfig.interceptor";
import { AuthGuard } from "./helpers/auth.guard";
import { OlddatefilterPipe } from "./pipes/olddatefilter/olddatefilter.pipe";
import { VisittypePipe } from './pipes/visitType/visittype.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    VisitorNewComponent,
    VisitorListComponent,
    VisitorSignoffComponent,
    VisitListComponent,
    VisitorFindComponent,
    StatisticsComponent,
    VisitGraphComponent,
    AdminLoginComponent,
    OlddatefilterPipe,
    VisittypePipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ChartsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "newvisitor", component: VisitorNewComponent },
      { path: "findvisitor", component: VisitorFindComponent },
      { path: "endvisit", component: VisitorSignoffComponent },
      {
        path: "statistics",
        component: StatisticsComponent,
        canActivate: [AuthGuard]
      },
      { path: "signin", component: AdminLoginComponent }
    ])
  ],
  providers: [
    /*{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
