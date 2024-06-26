import {Component, OnInit, Output} from '@angular/core';
import {TodoApiService} from "../../services/todo-api.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TodoApiModel} from "../../models/todo-api.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {map} from "rxjs";
import {trigger} from "@angular/animations";
import {CommonService} from "../../../../shared/services/common.service";

@Component({
  selector: 'app-todo-api-form',
  templateUrl: './todo-api-form.component.html',
  styleUrl: './todo-api-form.component.scss'
})
export class TodoApiFormComponent implements OnInit{

  todo: TodoApiModel;
  isAdded: boolean = false;
  message: string = 'Belum ada Todo Ditambahkan';
  alertIsShow: boolean = false;

  constructor(
    private readonly todoApiService: TodoApiService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly commonService: CommonService

  ) {
  }

  todoForm: FormGroup = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required, Validators.nullValidator]),
      isCompleted: new FormControl(false),
      createdAt: new FormControl(null)
    }
  )

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      map((params: Params) => {
        return params['id'] ? params['id'] : null;
      })
    ).subscribe( id => {
        if (id != null) {
          this.getTodoById(id);
        }
      }
    )
  }

  setFormValue(): void {
    if (this.todo){
      this.todoForm.setValue(this.todo);
    }
  }

  onSubmit(): void {
    this.todo = this.todoForm.value;
    if (this.todo.id == null) {
      this.todoApiService.createTodo(this.todo)
        .subscribe({
          next: () => {
            this.commonService.sendUpdate("refresh component");
            this.alertIsShow = true;
            this.message = 'Todo berhasil ditambahkan';
            this.todoForm.reset();
            setTimeout(() => {
              this.alertIsShow = false;
            }, 1000);
          },
          error: err => console.log(err)
        });
    } else {
      this.todoApiService.updateTodo(this.todo)
        .subscribe(
          {
            next: () => {
              this.commonService.sendUpdate("refresh component")
              this.alertIsShow = true;
              this.message = 'Todo berhasil diupdate';
              this.todoForm.reset();
              setTimeout(() => {
                this.alertIsShow = false;
              }, 1000);
            }, 
            error: err => console.log(err)
          }
        );
    }
  }

  getTodoById(id: string) {
    this.todoApiService.getById(id)
      .subscribe({
          next: response => {
            this.isAdded = true;
            this.todo = response.data;
            this.setFormValue();
          }
        });
  }

}
