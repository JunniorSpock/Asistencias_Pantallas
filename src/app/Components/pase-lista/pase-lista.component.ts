import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pase-lista',
  templateUrl: './pase-lista.component.html',
  styleUrls: ['./pase-lista.component.css']
})
export class PaseListaComponent implements OnInit {
  public token =localStorage.getItem('ACCESS_TOKEN');
  constructor() { }

  ngOnInit() {
  }

}
