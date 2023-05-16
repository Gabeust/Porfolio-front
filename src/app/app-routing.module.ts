import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { NuevaExperienciaComponent } from './experiencia/nueva-experiencia.component';
import { EditarexpComponent } from './experiencia/editarexp.component';
import { NuevacertiComponent } from './certificaciones/nuevacerti.component';
import { EditcertiComponent } from './certificaciones/editcerti.component';
import { NuevacompComponent } from './competencias/nuevacomp.component';
import { EditcompComponent } from './competencias/editcomp.component';
import { EditInfoComponent } from './infopers/edit-info.component';
import { GuardGuard } from './servicios/guard.guard';
import { NuevouserComponent } from './login/nuevouser.component';
import { NuevoProyComponent } from './proyectos/nuevo-proy.component';
import { EditarproyComponent } from './proyectos/editarproy.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'nuevaexperiencia', component: NuevaExperienciaComponent, canActivate: [GuardGuard] },
  { path: 'editarexp/:id', component: EditarexpComponent, canActivate: [GuardGuard] },
  { path: 'nuevacerti', component: NuevacertiComponent, canActivate: [GuardGuard] },
  { path: 'editcerti/:id', component: EditcertiComponent, canActivate: [GuardGuard] },
  { path: 'nuevacomp', component: NuevacompComponent, canActivate: [GuardGuard] },
  { path: 'editcomp/:id', component: EditcompComponent, canActivate: [GuardGuard] },
  { path: 'editinfo/:id', component: EditInfoComponent, canActivate: [GuardGuard] },
  { path: 'nuevouser', component: NuevouserComponent },
  { path: 'nuevoproy', component: NuevoProyComponent, canActivate: [GuardGuard]} ,
  { path: 'editarproy/:id', component: EditarproyComponent, canActivate: [GuardGuard]}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
