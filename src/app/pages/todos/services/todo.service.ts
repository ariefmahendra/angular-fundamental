import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = [];
  private storage: Storage = sessionStorage;


  public getAll(): Todo[] | undefined{
    const todoValue: string | null = this.storage.getItem('todos');
    try {
      const todos: Todo[] = todoValue ? JSON.parse(todoValue) : [];
      this.todos = todos;
      this.updateSession();
      return todos;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  public saveTodo(todo: Todo): void{
     try {
      if (!todo.id) {
        todo.id = this.todos.length < 1 ? 1 : this.todos[this.todos.length -1 ].id + 1;
        this.todos.push(todo);
      } else {
        this.todos.forEach((item, index) => {
          if(item.id == todo.id){
            this.todos.splice(index, 1, todo);
          }
        })
      }
      this.updateSession();
     } catch (error) {
      console.log(error);
     }
  }

  public deleteTodo(id: number){
    try {
      const todoId: number = this.todos.findIndex(item => item.id === id);
      this.todos.splice(todoId, 1);
      this.updateSession();
    }catch (err){
      console.log(err);
    }
  }

  public getTodoById(id: number): Todo {
    try {
      return this.todos.find(item => item.id === id);
    } catch (err) {
      console.log(err);
    }
  }

  public checkedTodo(todo: Todo): void{
    try {
      this.todos.forEach(item => {
        if (item.id === todo.id){
          item.isDone = !item.isDone;
          this.updateSession();
        }
      })
    } catch (err){
      console.log(err);
    }
  }

  private updateSession(): void {
    sessionStorage.setItem('todos', JSON.stringify(this.todos));
  }

}
