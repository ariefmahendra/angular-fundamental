import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {PagesModule} from "./pages/pages.module";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {NgOptimizedImage} from "@angular/common";
import {AppRoutingModule} from "./app.routing.module";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PagesModule,
    NgOptimizedImage,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
