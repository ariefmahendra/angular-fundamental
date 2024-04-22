import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import { RouteGuard } from "./shared/guard/route.guard";

const routes: Routes = [
  // eager load => akan dipanggil ketika sebelum aplikasi berjalan
  {
    path: 'home',
    canActivate: [RouteGuard],
    canActivateChild: [RouteGuard],
    component: HomeComponent
  },
  {
    path: 'about',
    canActivate: [RouteGuard],
    canActivateChild: [RouteGuard],
    component: AboutComponent
  },

  // lazy load => akan berjalan setelah aplikasi berjalan
  {
    path: 'pages',
    canActivate: [RouteGuard],
    canActivateChild: [RouteGuard],
    loadChildren: () => import("./pages/pages.module").then(m => m.PagesModule)
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  {
    path:'',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
