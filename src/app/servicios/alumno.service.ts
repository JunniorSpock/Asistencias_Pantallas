import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Observable, BehaviorSubject} from 'rxjs';
import { UsuarioService } from '../servicios/usuario.service';
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  API_URI = 'http://localhost:3000';
  authSubject = new BehaviorSubject(false);
  private token= localStorage.getItem('ACCESS_TOKEN');

  constructor(private http: HttpClient, private uS:UsuarioService) { }


  comprobarClase(token:String):Observable<Object>{
    return this.http.get<Object>(`${this.API_URI}/estudiante/comprobarClaseIniciada`).pipe(tap(
      (res: Object)=>{
      if (res){
        console.log(res);
      }
    })
    );
  }

}
