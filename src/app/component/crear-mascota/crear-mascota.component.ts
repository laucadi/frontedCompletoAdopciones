import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/sevicios/usuario.service';

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css'],
})
export class CrearMascotaComponent implements OnInit {
  public showModal: boolean = false;
  public token: any;
  public nombre: any;
  public id: any;
  public rol: any;

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.token = this.usuarioService.obtenerToken();
    this.nombre = this.usuarioService.obtenerNombre();
    this.id = this.usuarioService.obtenerIdentidad();
    this.rol = this.usuarioService.obtenerRol();
  }

  ngOnInit(): void {
    this.validar();
  }
  modal() {
    this.showModal = true;
  }
  public onCloseModal() {
    this.showModal = false;
  }

  validar() {
    if (this.token) {
      /* this.jefeService.obtenerToken().subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      ); */
    } else {
      this.router.navigate(['no-autorizado']);
    }
  }
}
