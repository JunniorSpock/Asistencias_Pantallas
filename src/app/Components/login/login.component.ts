import { Component, OnInit } from '@angular/core';
import {UsuarioService } from '../../servicios/usuario.service';
import {Usuario} from '../../models/usuario';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = {
    nombre: '',
    contrasenia:''
  };

  constructor( private usuarioServicio:UsuarioService) { }

  ngOnInit() {
  }

  loginUsuario(){
    console.log(this.usuario);
  }
}
