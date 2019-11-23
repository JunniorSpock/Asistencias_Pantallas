import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-misasistencias-calendario',
  templateUrl: './misasistencias-calendario.component.html',
  styleUrls: ['./misasistencias-calendario.component.css']
})
export class MisasistenciasCalendarioComponent implements OnInit {
  public token =localStorage.getItem('ACCESS_TOKEN');
  constructor() { }

  ngOnInit() {
  }

}
