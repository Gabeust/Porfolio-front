import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { CertificacionesComponent } from './certificaciones/certificaciones.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HttpClientModule} from '@angular/common/http';
import { InfopersComponent } from './infopers/infopers.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NuevaExperienciaComponent } from './experiencia/nueva-experiencia.component';
import { EditarexpComponent } from './experiencia/editarexp.component';
import { EditcertiComponent } from './certificaciones/editcerti.component';
import { NuevacertiComponent } from './certificaciones/nuevacerti.component';
import { CompetenciasComponent } from './competencias/competencias.component';
import { EditcompComponent } from './competencias/editcomp.component';
import { NuevacompComponent } from './competencias/nuevacomp.component';
import { EditInfoComponent } from './infopers/edit-info.component';
import { ParaformComponent } from './paraform/paraform.component';
import { InterceptorProvider } from './servicios/interceptor';
import { NuevouserComponent } from './login/nuevouser.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { Environment } from '../environments/environment';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { EditarproyComponent } from './proyectos/editarproy.component';
import { NuevoProyComponent } from './proyectos/nuevo-proy.component';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    HeaderComponent,
    NavComponent,
    CertificacionesComponent,
    ExperienciaComponent,
    FooterComponent,
    ContactoComponent,
    InfopersComponent,
    NuevaExperienciaComponent,
    EditarexpComponent,
    EditcertiComponent,
    NuevacertiComponent,
    CompetenciasComponent,
    EditcompComponent,
    NuevacompComponent,
    EditInfoComponent,
    ParaformComponent,
    NuevouserComponent,
    ProyectosComponent,
    EditarproyComponent,
    NuevoProyComponent,
  
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(Environment.firebaseConfig),
    AngularFireStorageModule    

  ],

  providers: [
        InterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
