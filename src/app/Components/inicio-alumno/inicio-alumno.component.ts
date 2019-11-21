import { Component, OnInit } from '@angular/core';
import {UsuarioService } from '../../servicios/usuario.service';
import{ Usuario} from '../../models/usuario';
@Component({
  selector: 'app-inicio-alumno',
  templateUrl: './inicio-alumno.component.html',
  styleUrls: ['./inicio-alumno.component.css']
})

export class InicioAlumnoComponent implements OnInit {
  constructor(private usuarioServicio: UsuarioService) { }
  public token =localStorage.getItem('ACCESS_TOKEN');
    public suadero= this.usuarioServicio.mostrarDatosToken(this.token);
    public nombre= this.suadero.nombre;
    public id= this.suadero.id;
    public tipo= this.suadero.tipo;
  ngOnInit() {
    
  }
  

}