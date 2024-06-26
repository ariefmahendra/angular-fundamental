import { TodoService } from '../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import {Todo} from "../../models/todo.model";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit{
  constructor(
    private readonly todoService: TodoService
  ){

  }
  ngOnInit(): void {
    this.getAllTodo();
  }

  todos: Todo[] =[];

  public getAllTodo(){
    try {
      this.todos = this.todoService.getAll();
    } catch(error){
      console.log(error);
    }
  }

  onCheckTodo(todo: Todo): void {
    this.todoService.checkedTodo(todo);
  }

  onDeleteTodo(todo: Todo): void{
    this.todoService.deleteTodo(todo.id);
  }
}
