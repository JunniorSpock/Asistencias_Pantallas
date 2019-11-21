import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
@Component({
  selector: 'app-inicio-maestro',
  templateUrl: './inicio-maestro.component.html',
  styleUrls: ['./inicio-maestro.component.css']
})
export class InicioMaestroComponent implements OnInit {

  constructor(private usuarioServicio:UsuarioService) { }
  public token =localStorage.getItem('ACCESS_TOKEN');
  public suadero= this.usuarioServicio.mostrarDatosToken(this.token);
  public nombre= this.suadero.nombre;
  public id= this.suadero.id;
  public tipo= this.suadero.tipo;
  ngOnInit() {
  }

}
