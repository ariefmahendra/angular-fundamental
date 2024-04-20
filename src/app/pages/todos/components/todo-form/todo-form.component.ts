import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Todo} from "../../models/todo.model";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent implements OnChanges{
  isAdded: boolean = false;
  message: string = 'No todo added yet';

  constructor(
    private readonly todoService: TodoService,
  ) {
  }

  todoForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    title: new FormControl(null),
    isDone: new FormControl(false),
  })

  onSubmit(){
    const todo = this.todoForm.value;
    this.todoService.saveTodo(todo);
    this.isAlert();
    this.todoForm.reset();
  }

  ngOnChanges(): void {

  }

  isAlert(): void{
    this.isAdded = true;
    this.message = 'Todo berhasil ditambahkan';
  }

}
