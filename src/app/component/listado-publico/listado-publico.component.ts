import { Component, OnInit } from '@angular/core';
import { MascotaService } from 'src/app/sevicios/mascota.service';
import { UsuarioService } from 'src/app/sevicios/usuario.service';

@Component({
  selector: 'app-listado-publico',
  templateUrl: './listado-publico.component.html',
  styleUrls: ['./listado-publico.component.css'],
})
export class ListadoPublicoComponent implements OnInit {
  public mascotas = [];
  rol: any;

  constructor(
    private mascotaService: MascotaService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.cargarMascotas();
  }

  cargarMascotas() {
    this.mascotaService.listarMascotas().subscribe((response) => {
      this.mascotas = response;
    });
  }
}
