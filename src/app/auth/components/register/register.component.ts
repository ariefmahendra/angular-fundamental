import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiResponse } from '../../../shared/models/response.model';
import { RegisterResponse } from '../../models/auth.model';
import { AlertMessage } from '../../../shared/models/alert-message.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  alertIsShow: boolean = false;
  alert: AlertMessage
  constructor(
    private readonly authService: AuthService,
  ){}

  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value)
        .subscribe(
          {
            next: (response: ApiResponse<RegisterResponse>) => {
              this.displayAlert('akun baru berhasil dibuat, silahkan login', 'info')
              this.alertIsShow = true;
            },
          }
        )

      this.registerForm.reset();
    } else {
      this.displayAlert('form tidak valid', 'danger')
      this.alertIsShow = true;
    }
  }
  displayAlert(message: string, status: 'info' | 'success' | 'warning' | 'danger'): void{
    this.alert = {status : status, text: message};
  }
}
