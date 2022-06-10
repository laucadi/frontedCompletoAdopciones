import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioService } from 'src/app/sevicios/usuario.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public id: any;
  public token: any;
  public nombre: any;
  public rol: any;

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.id = this.usuarioService.obtenerIdentidad();
    this.token = this.usuarioService.obtenerToken();
    this.nombre = this.usuarioService.obtenerNombre();
    this.rol = this.usuarioService.obtenerRol();
  }

  ngOnInit(): void {}
  cerrarSesion() {
    localStorage.removeItem('token');
    localStorage.removeItem('nombres');
    localStorage.removeItem('id');
    localStorage.removeItem('rol');

    this.id = null;
    this.token = null;
    this.nombre = null;
    this.rol = null;

    Swal.fire('Has cerrado sesión correctamente!');

    this.router.navigate(['']);
  }
}
