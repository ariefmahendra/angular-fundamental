import { Injectable } from '@angular/core';
import {catchError, Observable} from "rxjs";
import {ApiResponse} from "../../../shared/models/response.model";
import {TodoApiModel} from "../models/todo-api.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CodeService} from "../../../shared/types/enum.types";

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(
    private readonly http: HttpClient
  ) { }

  public list(): Observable<ApiResponse<TodoApiModel[]>> {
    const token = sessionStorage.getItem('token');
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<ApiResponse<TodoApiModel[]>>(CodeService.GET_ALL_TODOS, {headers})
      .pipe(
        catchError((err: Error) => {
          throw err
        })
      )
  }

  public delete(id: string): Observable<ApiResponse<{id: String}>> {
    return this.http.delete<ApiResponse<{id: string}>>(CodeService.DELETE_TODO + `/${id}`)
      .pipe(
        catchError((err: Error) => {
          throw err;
        })
      )
  }

  public getById(id: string): Observable<ApiResponse<TodoApiModel>> {
    return this.http.get<ApiResponse<TodoApiModel>>(CodeService.GET_BY_ID + `${id}`)
      .pipe(
        catchError((err: Error) => {
          throw err;
          }
        )
      )
  }

  public createTodo(todo: TodoApiModel): Observable<ApiResponse<TodoApiModel>> {
    return this.http.post<ApiResponse<TodoApiModel>>(CodeService.CREATE_TODO, todo)
      .pipe(
        catchError((err: Error) => {
          throw err;
        })
      )
  }
}
