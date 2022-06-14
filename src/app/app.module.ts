import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './component/inicio/inicio.component';
import { CrearMascotaComponent } from './component/crear-mascota/crear-mascota.component';
import { PaginaNoAutorizadaComponent } from './component/pagina-no-autorizada/pagina-no-autorizada.component';
import { FormCrearComponent } from './component/crear-mascota/form-crear/form-crear.component';
import { EditarUsuarioComponent } from './component/usuario/editar-usuario/editar-usuario.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    InicioComponent,
    CrearMascotaComponent,
    PaginaNoAutorizadaComponent,
    FormCrearComponent,
    EditarUsuarioComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
