import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoApiComponent } from './todo-api.component';

const routes: Routes = [
  {path: '', component: TodoApiComponent},
  {path: ':id', component: TodoApiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoApiRoutingModule { }
