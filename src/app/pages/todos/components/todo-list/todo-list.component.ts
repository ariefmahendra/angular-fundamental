import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from "../../models/todo.model";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  @Input() list: Todo[] = []
  @Output() toggleTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() editTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  onCheckTodo(todo: Todo): void { 
    todo.isDone = !todo.isDone;
    this.toggleTodo.emit(todo);
  }

  onSelectTodo(todo?: Todo): void {
    this.editTodo.emit(todo);
  }
}
