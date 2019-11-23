import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-asistencia',
  templateUrl: './mi-asistencia.component.html',
  styleUrls: ['./mi-asistencia.component.css']
})
export class MiAsistenciaComponent implements OnInit {
  public token =localStorage.getItem('ACCESS_TOKEN');
  constructor() { }

  ngOnInit() {
  }

}
