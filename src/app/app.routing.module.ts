import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  // eager load => akan dipanggil ketika sebelum aplikasi berjalan
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },

  // lazy load => akan berjalan setelah aplikasi berjalan
  {
    path: 'todos',
    loadChildren: () => import("./pages/pages.module").then(m => m.PagesModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
