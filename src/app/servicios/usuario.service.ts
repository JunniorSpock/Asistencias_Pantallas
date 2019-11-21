import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuario} from '../models/usuario';
import {tap} from 'rxjs/operators';
import {Observable, BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  API_URI = 'http://localhost:3000';
  authSubject = new BehaviorSubject(false);
  private token: string;
  constructor(private http: HttpClient) { }





  login(usuario:Usuario): Observable<String>{
    return this.http.post<string>(`${this.API_URI}/login`,usuario).pipe(tap(
      (res: string)=>{
      if (res){
          this.guardarToken(res);
      }
    })
    );
  }

  public mostrarDatosToken(tokenCodificado:String){
      var segments = tokenCodificado.split(".");
      if (!segments || segments.length !== 3) {
         throw new Error("Invalid JWT");
      }
      var claims = segments[1];
      return JSON.parse(decodeURIComponent(escape(window.atob(claims))));
  }


  private guardarToken(token:string):void{
    localStorage.setItem("ACCESS_TOKEN",token);
    this.token=token;
  }

  private getToken():string{
    if(!this.token){
      this.token=localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }


}
