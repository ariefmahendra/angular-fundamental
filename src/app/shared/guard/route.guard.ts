import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate, CanActivateChild {

  constructor(
    private readonly router: Router
  ){}

  canActivate(): boolean {
      return this.authorize()
  }

  canActivateChild(): boolean{
      return this.authorize()
  }

  private authorize(): boolean{
    const auth: boolean = (sessionStorage.getItem('token')) != null
    if(!auth){
      alert('Kamu tidak dapat mengakses halaman ini')
      this.router.navigateByUrl('/auth/login')
    }
    return auth
  }
  
}
