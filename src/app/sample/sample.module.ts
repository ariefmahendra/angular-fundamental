import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {ResourceComponent} from "./resource/resource.component";
import { SampleComponent } from './sample.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ResourceComponent,
    SampleComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ResourceComponent,
    SampleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SampleModule { }
