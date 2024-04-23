import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

/**
 * command untuk sekaligus membuat route ke child nya dengan konsep lazy load
 * $ ng g m pages/todos --route todos --module pages.module
 */

const routes: Routes = [
  {
    path: 'todos',
    loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule)
  },
  {
    path: 'todo-api',
    loadChildren: () => import('./todo-api/todo-api.module').then(m => m.TodoApiModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule {}
