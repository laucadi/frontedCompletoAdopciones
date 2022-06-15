import { Component, OnInit } from '@angular/core';
import { MascotaService } from 'src/app/sevicios/mascota.service';


@Component({
  selector: 'app-listado-publico',
  templateUrl: './listado-publico.component.html',
  styleUrls: ['./listado-publico.component.css']
})
export class ListadoPublicoComponent implements OnInit {
  public mascotas = [];

  constructor(
    private mascotaService: MascotaService
  ) { }

  ngOnInit(): void {
    this.cargarMascotas();
  }

  cargarMascotas() {
    this.mascotaService.listarMascotas().subscribe((response) => {
      this.mascotas = response
    })
  }

}
