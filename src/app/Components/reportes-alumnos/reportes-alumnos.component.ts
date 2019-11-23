import { Component, OnInit } from '@angular/core';
import {UsuarioService } from '../../servicios/usuario.service';
@Component({
  selector: 'app-reportes-alumnos',
  templateUrl: './reportes-alumnos.component.html',
  styleUrls: ['./reportes-alumnos.component.css']
})
export class ReportesAlumnosComponent implements OnInit {
  public token =localStorage.getItem('ACCESS_TOKEN');
  constructor() { }

  ngOnInit() {
  }


}
