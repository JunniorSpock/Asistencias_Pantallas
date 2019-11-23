import { Component, OnInit } from '@angular/core';
import {UsuarioService } from '../../servicios/usuario.service';
import { Router } from '@angular/router';
import { AlumnoService } from 'src/app/servicios/alumno.service';
@Component({
  selector: 'app-inicio-alumno',
  templateUrl: './inicio-alumno.component.html',
  styleUrls: ['./inicio-alumno.component.css']
})

export class InicioAlumnoComponent implements OnInit {
  constructor(
    private usuarioServicio: UsuarioService,
     private alumnoServicio:AlumnoService,
     private router: Router) { }
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


  comprobarClase(){
    let alumnoClases=this.alumnoServicio.comprobarClase(this.token);
   if(alumnoClases){
    console.log(alumnoClases);
   this.router.navigateByUrl('/regAsist');
  }
}
    
    
  

}