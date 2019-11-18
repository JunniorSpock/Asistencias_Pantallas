import { Component, OnInit } from '@angular/core';
import {UsuarioService } from '../../servicios/usuario.service';
import {Usuario} from '../../models/usuario';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private usuarioServicio:UsuarioService,private router:Router) { }

  ngOnInit() {
  }

  loginUsuario(form):void{
   this.usuarioServicio.login(form.value).subscribe(res=>{
    const suadero = this.usuarioServicio.mostrarDatosToken(res);
    if(suadero.tipo=='maestro'){ 
      this.router.navigateByUrl('/hubMaestro')
    }
    if(suadero.tipo=="alumno"){
      this.router.navigateByUrl('/hubAlumno')
    }
   });
  }
}
