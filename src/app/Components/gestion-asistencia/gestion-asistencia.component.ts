import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-asistencia',
  templateUrl: './gestion-asistencia.component.html',
  styleUrls: ['./gestion-asistencia.component.css']
})
export class GestionAsistenciaComponent implements OnInit {
  public token =localStorage.getItem('ACCESS_TOKEN');
  constructor() { }

  ngOnInit() {
  }

}
