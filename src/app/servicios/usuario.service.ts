import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuario} from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
    API_URI = 'http://localhost:3000';


  login(usuario:Usuario){
    return this.http.post(`${this.API_URI}/login`,usuario);
  }


}
