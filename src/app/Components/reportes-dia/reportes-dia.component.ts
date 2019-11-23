import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes-dia',
  templateUrl: './reportes-dia.component.html',
  styleUrls: ['./reportes-dia.component.css']
})
export class ReportesDiaComponent implements OnInit {
  public token =localStorage.getItem('ACCESS_TOKEN');
  constructor() { }

  ngOnInit() {
  }

}
