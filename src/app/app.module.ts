import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {PagesModule} from "./pages/pages.module";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {NgOptimizedImage} from "@angular/common";
import {AppRoutingModule} from "./app-routing.module";
import {DemoModule} from "./demo/demo.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {RequestInterceptor} from "./shared/interceptor/request.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    PagesModule,
    NgOptimizedImage,
    DemoModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
