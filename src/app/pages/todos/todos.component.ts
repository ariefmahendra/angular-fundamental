import {Component, OnInit} from '@angular/core';
import {Todo} from "./models/todo.model";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit{

  todos: Todo[] = []; // buat nangkep list
  todoValue?: Todo; // buat nangkep edit atau hapus

  get todo(): Todo {
    return this.todoValue as Todo;
  }

  set todo(todo : Todo) {
    this.onSaveTodo(todo);
  }  

  ngOnInit(): void {
    this.initTodo();
  }

  initTodo(): void {
    const sessionTodos: string = sessionStorage.getItem('todos') as string;
    if (!sessionTodos) {
      const todos: Todo[] = [
        {
          id: 1,
          title: "makan",
          isDone: true
        },
        {
          id: 2,
          title: "Minum",
          isDone: true
        },
        {
          id: 3,
          title: "Mandi",
          isDone: false
        },
        {
          id: 4,
          title: "Ngoding",
          isDone: true
        },
      ];
      sessionStorage.setItem('todos', JSON.stringify(todos));
      this.todos = todos;
    } else {
      this.todos = JSON.parse(sessionTodos)
    }
  }

  onSaveTodo(todo: Todo): void {
    console.log("onsavetodo");
    
    if (this.todoValue) {
      this.todos = this.todos.map((item: Todo) => {
        if (todo.id === item.id) {
            item = {...todo, ...item};
        }
        return item;
      })
      sessionStorage.setItem('todos', JSON.stringify(this.todos));
    } else {
      todo.id = this.todos.length + 1;
      this.todos.push(todo)
      sessionStorage.setItem('todos', JSON.stringify(this.todos));  
    }
  }

  onEditTodo(todo: Todo): void {
    this.todoValue = todo;
  }

  onToggleTodo(): void {
    sessionStorage.setItem('todos', JSON.stringify(this.todos));
  }

  onDeleteTodo(todo: Todo): void {
    if (todo.isDone) {
      alert('todo ini tidak boleh dihapus karena sudah selesai');
    } else {
      this.todos.splice(1, 1);
      sessionStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }
}
