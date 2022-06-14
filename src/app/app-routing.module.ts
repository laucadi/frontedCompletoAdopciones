import { ComponentRef, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './component/blog/blog.component';
import { CrearMascotaComponent } from './component/crear-mascota/crear-mascota.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PaginaNoAutorizadaComponent } from './component/pagina-no-autorizada/pagina-no-autorizada.component';
import { EditarUsuarioComponent } from './component/usuario/editar-usuario/editar-usuario.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: InicioComponent },
  { path: 'crearMascota', component: CrearMascotaComponent },
  { path: 'no-autorizado', component: PaginaNoAutorizadaComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'editarUsuario', component: EditarUsuarioComponent },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
