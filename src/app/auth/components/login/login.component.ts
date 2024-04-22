import { Component } from '@angular/core';
import {AlertMessage} from "../../../shared/models/alert-message.model";
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiResponse} from "../../../shared/models/response.model";
import {LoginResponse} from "../../models/auth.model";
import {Router} from "@angular/router";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  alert: AlertMessage;
  alertIsShow: boolean = false;
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}


  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })


  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
        .subscribe(
          {
            next: (response: ApiResponse<LoginResponse>) => {
              console.log(response);
              sessionStorage.setItem('token', response.data.accessToken);
              this.router.navigateByUrl('home').then();
            },
            error: (err: HttpErrorResponse) => {
              this.alertIsShow = true;
              this.setAlert('email atau password anda salah', 'danger');
            }
          })
    } else {
      this.setAlert('form tidak valid', 'danger')
      this.alertIsShow = true;
    }
  }

  private setAlert(message: string, status: 'info' | 'success' | 'warning' | 'danger'): void{
    this.alert  = { status : status, text: message };
  }
}
