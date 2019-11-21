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
          this.flashMessage.show('Ha iniciado sesión como maestro', { cssClass: 'alert-success', timeout: 4000 });
          console.log(suadero);
          this.router.navigateByUrl('/hubMaestro');

        } else if (suadero.tipo == "alumno") {
          this.flashMessage.show('Ha iniciado sesión como alumno', { cssClass: 'alert-success', timeout: 4000 });
          console.log(suadero);
          this.router.navigateByUrl('/hubAlumno');
        }

      }, error => {
        this.flashMessage.show("Usuario o contraseña incorrectos", { cssClass: 'alert-danger', timeout: 4000 });
      });

    } catch (err) {

    }
  }

}
