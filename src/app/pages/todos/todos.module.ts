import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TodoService} from "./services/todo.service";


@NgModule({
  declarations: [
    TodosComponent,
    TodoListComponent,
    TodoFormComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TodoService
  ]
})
export class TodosModule { }
