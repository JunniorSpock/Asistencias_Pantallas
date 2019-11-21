import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private usuarioServicio: UsuarioService,
    private router: Router,
    public flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  loginUsuario(form): void {
    try {
      this.usuarioServicio.login(form.value).subscribe(res => {
        const suadero = this.usuarioServicio.mostrarDatosToken(res);
        if (suadero.tipo == 'maestro') {
          console.log(suadero);
          this.flashMessage.show('Ha iniciado sesión como el/la maestro '+suadero.nombre, { cssClass: 'alert-success', timeout: 4000 });
          this.router.navigateByUrl('/hubMaestro');

        } else if (suadero.tipo == "alumno") {
          console.log(suadero);
          this.flashMessage.show('Ha iniciado sesión como el/la alumno ' +suadero.nombre, { cssClass: 'alert-success', timeout: 4000 });
          
          this.router.navigateByUrl('/hubAlumno');
        }

      }, error => {
        this.flashMessage.show("Usuario o contraseña incorrectos", { cssClass: 'alert-danger', timeout: 4000 });
      });

    } catch (err) {
      console.log(err);
    }
  }

}
