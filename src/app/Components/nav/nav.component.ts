import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private usuarioServicio: UsuarioService,
    private router: Router) { }

  ngOnInit() {
  }

  logOut(){
    localStorage.removeItem('ACCESS_TOKEN');
    this.router.navigateByUrl('/login');
  }

}
