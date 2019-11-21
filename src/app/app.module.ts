import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { MiAsistenciaComponent } from './Components/mi-asistencia/mi-asistencia.component';
import { GestionAsistenciaComponent } from './Components/gestion-asistencia/gestion-asistencia.component';
import { ReportesComponent } from './Components/reportes/reportes.component';
import { MisasistenciasCalendarioComponent } from './misasistencias-calendario/misasistencias-calendario.component';
import { ReportesAlumnosComponent } from './Components/reportes-alumnos/reportes-alumnos.component';
import { ReportesDiaComponent } from './Components/reportes-dia/reportes-dia.component';
import { ModificarClaseComponent } from './Components/modificar-clase/modificar-clase.component';
import { LoginComponent } from './Components/login/login.component';
import { InicioMaestroComponent } from './Components/inicio-maestro/inicio-maestro.component';
import { InicioAlumnoComponent } from './Components/inicio-alumno/inicio-alumno.component';
import { RegistrarAsistenciaComponent } from './Components/registrar-asistencia/registrar-asistencia.component';
import { PaseListaComponent } from './Components/pase-lista/pase-lista.component';
import {HttpClientModule} from '@angular/common/http';
import {UsuarioService} from './servicios/usuario.service'; 
import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MiAsistenciaComponent,
    GestionAsistenciaComponent,
    ReportesComponent,
    MisasistenciasCalendarioComponent,
    ReportesAlumnosComponent,
    ReportesDiaComponent,
    ModificarClaseComponent,
    LoginComponent,
    InicioMaestroComponent,
    InicioAlumnoComponent,
    RegistrarAsistenciaComponent,
    PaseListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FlashMessagesModule
  ],
  providers: [
    UsuarioService,FlashMessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
