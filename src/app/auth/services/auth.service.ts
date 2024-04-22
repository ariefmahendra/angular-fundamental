import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, LoginResponse, Register, RegisterResponse } from '../models/auth.model';
import { catchError, Observable, throwError } from 'rxjs';
import { ApiResponse } from '../../shared/models/response.model';
import { CodeService } from '../../shared/types/enum.types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly http: HttpClient
  ) { }

  public register(payload: Register): Observable<ApiResponse<RegisterResponse>> {
    return this.http.post<ApiResponse<RegisterResponse>>(CodeService.AUTH_REGISTER, payload)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      )

  }

  public login(payload: Login): Observable<ApiResponse<LoginResponse>> {
    return this.http.post<ApiResponse<LoginResponse>>(CodeService.AUTH_LOGIN, payload)
      .pipe(
        catchError((error: any) => {
          throw error;
        })
      );
  }
}
