import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TodoService} from "../../services/todo.service";
import {Todo} from "../../models/todo.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {map} from "rxjs";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent implements OnInit{
  todo?: Todo;

  isAdded: boolean = false;
  message: string = 'No todo added yet';

  constructor(
    private readonly todoService: TodoService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
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

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      map((params: Params) => {
        return params['id'] ? Number(params['id']) : null
      })
    ).subscribe(id => {
      this.todo = this.todoService.getTodoById(id);
      this.setFormValue()
    })
  }

  setFormValue():void{
    if (this.todo) {
      this.todoForm.setValue(this.todo);
    }
  }

  isAlert(): void{
    this.isAdded = true;
    this.message = 'Todo berhasil ditambahkan';
  }


}
