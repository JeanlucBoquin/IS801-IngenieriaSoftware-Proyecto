import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from "rxjs/operators";
import { of, Observable } from 'rxjs';

import { Usuario, LoginResponse } from '../../home-page/interfaces/interfaces';
import { FormGroup } from '@angular/forms';
import { AuthResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl:string = environment.baseUrl;
  private _user!:Usuario;

  get user(){
    return {...this._user}
  }

  constructor( private http:HttpClient ) { }

  login( email:string, password:string ):Observable<boolean | string>{
    const url  = `${this._baseUrl}/login`
    const body = {email,password}
    return this.http.post<LoginResponse>( url, body)
      .pipe(
        tap(resp => {
          if(resp.ok === true){
            localStorage.setItem("token",resp.token!)
            console.log(resp.data?.uid!)
            this._user = {
              uid   :resp.data?.uid!,
              name  :resp.data?.name!,
              email :resp.data?.email!,
              role  :resp.data?.role!
            }
          }
        }),
        map( resp => {
          return resp.ok
        }),
        catchError( (err) =>{
          // console.log("CATCH",err.error)
          return of(err.error?.msg||"Error en la peticion")
        })
      )
  }

  register( form:FormGroup ){
    const url = `${this._baseUrl}/usuarios`
    return this.http.post<AuthResponse>(url, form.value)
      .pipe(
        map(resp => resp.ok),
        catchError( err => of(err.error.msg))
      ); 
  }
}