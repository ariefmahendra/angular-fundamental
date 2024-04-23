import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoApiRoutingModule } from './todo-api-routing.module';
import { TodoApiComponent } from './todo-api.component';
import { TodoApiListComponent } from './components/todo-api-list/todo-api-list.component';
import { TodoApiFormComponent } from './components/todo-api-form/todo-api-form.component';
import {TodoApiService} from "./services/todo-api.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TodoApiComponent,
    TodoApiListComponent,
    TodoApiFormComponent
  ],
  imports: [
    CommonModule,
    TodoApiRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TodoApiService
  ]
})
export class TodoApiModule { }
