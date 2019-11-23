import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificar-clase',
  templateUrl: './modificar-clase.component.html',
  styleUrls: ['./modificar-clase.component.css']
})
export class ModificarClaseComponent implements OnInit {
  public token =localStorage.getItem('ACCESS_TOKEN');
  constructor() { }

  ngOnInit() {
  }

}
