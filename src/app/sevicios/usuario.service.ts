import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const base_url = environment.url;

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  public user: any;
  public token: any;
  public identity: any;
  public nombres: any;
  public id: any;
  public rol: any;

  constructor(private http: HttpClient) {}

  crear(data: any) {
    return this.http.post<any>(base_url + 'usuarios/crearUsuario', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  login(user: any, obtenerToken = null): Observable<any> {
    let json = user;
    if (obtenerToken != null) {
      user.token = true;
    }
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(base_url + 'usuarios/loginUsuario', json, {
      headers: headers,
    });
  }
  obtenerToken(): Observable<any> {
    let tokenAuxiliar = localStorage.getItem('token');
    if (tokenAuxiliar) {
      this.token = tokenAuxiliar;
    } else {
      this.token = null;
    }
    return this.token;
  }

  obtenerIdentidad(): Observable<any> {
    let identityAuxiliar = localStorage.getItem('id');
    if (identityAuxiliar) {
      this.identity = identityAuxiliar;
    } else {
      this.identity = null;
    }
    return this.identity;
  }

  obtenerNombre(): Observable<any> {
    let nombresAuxiliar = localStorage.getItem('nombres');
    if (nombresAuxiliar) {
      this.nombres = nombresAuxiliar;
    } else {
      this.nombres = null;
    }
    return this.nombres;
  }
  obtenerId(): Observable<any> {
    let id = localStorage.getItem('id');
    if (id) {
      this.id = id;
    } else {
      this.id = null;
    }

    return this.id;
  }

  obtenerRol(): Observable<any> {
    let rol = localStorage.getItem('rol');
    if (rol) {
      this.rol = rol;
    } else {
      this.rol = null;
    }

    return this.rol;
  }

  obtenerUsuarios() {
    return this.http.get<any>(base_url + 'usuarios/listar').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  obtenerUsuarioParametro(nombres: any) {
    return this.http
      .get<any>(base_url + 'usuarios/listarNombre/' + nombres)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  obtenerUsuario(id: number) {
    return this.http.get<any>(base_url + 'usuarios/listarUsuario/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  actualizarUsuario(data: any, id: number) {
    return this.http
      .put<any>(base_url + 'usuarios/actualizarUsuario/' + id, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  deleteUsurio(_id: string) {
    return this.http.delete(base_url + 'usuario/eliminarUsuario/' + _id);
  }
}
