import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodoApiService} from "../../services/todo-api.service";
import {TodoApiModel} from "../../models/todo-api.model";
import {ApiResponse} from "../../../../shared/models/response.model";
import {CommonService} from "../../../../shared/services/common.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-todo-api-list',
  templateUrl: './todo-api-list.component.html',
  styleUrl: './todo-api-list.component.scss'
})
export class TodoApiListComponent implements OnInit, OnDestroy{
  todos: TodoApiModel[] = [];
  private subscription: Subscription;

  constructor(
    private readonly todoApiService: TodoApiService,
    private readonly commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.subscription = this.commonService.getUpdate()
      .subscribe(
        {
          next: value => {
            console.log(value);
            this.getAllTodos();
          }
        }
      );

    this.getAllTodos();
  }

  getAllTodos(): void{
    this.todoApiService.list()
      .subscribe({
        next: (response: ApiResponse<TodoApiModel[]>) => {
          this.todos = response.data;
        },
        error: (error: Error) => {
          console.log(error)
        }
      })
  }

  onDeleteTodo(todo: TodoApiModel) {
    this.todoApiService.delete(todo.id)
      .subscribe({
        next: response => {
          console.log(response)
        },
        error: err => console.log(err),
        complete: () => {
          this.ngOnInit()
        }
      })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
