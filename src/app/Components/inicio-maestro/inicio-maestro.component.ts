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
  public nombre= ''
  public id= ''
  public tipo= ''

  ngOnInit() {
    this.getDatos();
  }


  getDatos():void{
    if(this.suadero){
     this.nombre= this.suadero.nombre;
     this.id=this.suadero.id;
     this.tipo=this.suadero.tipo;
    }
  }

  

}
