import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './Components/login/login.component'
import { InicioMaestroComponent } from './Components/inicio-maestro/inicio-maestro.component';
import { InicioAlumnoComponent } from './Components/inicio-alumno/inicio-alumno.component';

const routes: Routes = [
{
  path:'',
  redirectTo: '/login',
  pathMatch: 'full'
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'hubMaestro',
  component: InicioMaestroComponent
},
{
  path: 'hubAlumno',
  component: InicioAlumnoComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
