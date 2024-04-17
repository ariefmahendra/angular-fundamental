import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import {PagesRoutingModule} from './pages-routing.module';

@NgModule({
  declarations: [
    TodosComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    PagesRoutingModule
  ]
})
export class PagesModule { }
