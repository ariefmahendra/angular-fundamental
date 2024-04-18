import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    DemoComponent,
    ParentComponent,
    ChildComponent
  ],
  exports: [
    DemoComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class DemoModule { }
