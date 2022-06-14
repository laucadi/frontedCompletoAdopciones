import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UsuarioService } from './usuario.service';

const base_url = environment.url;

@Injectable({
  providedIn: 'root',
})
export class MascotaService {
  token: any;
  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) {
    this.token = this.usuarioService.obtenerToken();
  }

  crearMascota() {
    return this.http.get<any>(base_url + 'mascotas/crearMascota').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  //imagen
  insert_mascota(data: any) {
    const fd = new FormData();
    fd.append('nombre', data.nombre);
    fd.append('edad', data.edad);
    fd.append('especie', data.especie);
    fd.append('raza', data.raza);
    fd.append('imagen', data.imagen);
    fd.append('estadoDeEsterilizacion', data.estadoDeEsterilizacion);
    fd.append('estadoDeVacunacion', data.estadoDeVacunacion);
    fd.append('descripcionDeLaMascota', data.descripcionDeLaMascota);
    fd.append('fechaDeNacimiento', data.fechaDeNacimiento);
    fd.append('idusuario', data.idusuario);

    return this.http.post(base_url + 'mascotas/crearMascota', fd);
  }

  listarMascotas() {
    return this.http.get<any>(base_url + 'mascotas/listarMascotas').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  obtenerPorEspecie(especie: any) {
    return this.http
      .get<any>(base_url + 'mascotas/buscarPorCoincidencia' + especie)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  actualizarMascota(data: any, id: number) {
    return this.http
      .put<any>(base_url + 'mascotas/actualizarMascota' + id, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  eliminarMascota(_id: string) {
    return this.http.delete(base_url + 'mascotas/eliminarMascota/' + _id);
  }

  mascotaPorUsuario(id: any) {
    return this.http
      .get<any>(base_url + 'mascotas/mascotaPorUsuario/' + id)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
