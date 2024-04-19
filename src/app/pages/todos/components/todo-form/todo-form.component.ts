import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Todo} from "../../models/todo.model";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {

  @Input() todo?: Todo;
  @Output() saveTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  todoForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    title: new FormControl(null),
    isDone: new FormControl(false),
  })

  onSubmit(){
    this.saveTodo.emit(this.todoForm.value);
    this.todoForm.reset();
  }

}
