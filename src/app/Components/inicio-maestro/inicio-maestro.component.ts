import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
@Component({
  selector: 'app-inicio-maestro',
  templateUrl: './inicio-maestro.component.html',
  styleUrls: ['./inicio-maestro.component.css']
})
export class InicioMaestroComponent implements OnInit {

  constructor(usuario:UsuarioService) { }

  ngOnInit() {
  }

}
