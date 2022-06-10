import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/sevicios/usuario.service';
import Swal from 'sweetalert2';
import { usuarios } from '../models/usuarios.models';
//import { RegistroUsuarioComponent } from 'src/app/registro-usuario/registro-usuario.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user: any;
  public token: any;
  public identity: any;
  public nombre: any;
  public mensaje_ok: any;
  public mensaje_error: any;
  rol2: any;

  formValue!: FormGroup;

  // crear Usuario:
  public correo: any;
  public id: any;
  public rol = ['admin', 'adoptante', 'rescatista'];

  usuariosModel: usuarios = new usuarios();

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router //private registroUsuario: RegistroUsuarioComponent
  ) {}

  ngOnInit(): void {
    this.camposLogin();
    this.obtenerCampos();
  }
  camposLogin() {
    this.formValue = this.formBuilder.group({
      correo: [''],
      contrasena: [''],
    });
  }
  login() {
    if (this.formValue.value.correo == '') {
      //alert('Debe diligenciar su correo');
      this.mensaje_error = 'Debes diligenciar el correo';
    } else if (this.formValue.value.contrasena == '') {
      //alert('Debe diligenciar su contraseña');
      this.mensaje_error = 'Debes diligenciar la contraseña';
    } /* else if (this.formValue.value.rol == '') {
      //alert('Debe diligenciar su contraseña');
      this.mensaje_error = 'Debes diligenciar el campo';
    }  */ else {
      this.usuarioService.login(this.formValue.value).subscribe(
        (response) => {
          console.log(response);
          if (response.mensaje == 'correo Incorrecto') {
            //alert('El correo no existe');
            this.mensaje_error = 'Correo incorrecto';
          } else if (response.mensaje == 'Contrasena incorrecta') {
            //alert('La contraseña no es correcta');
            this.mensaje_error = 'Contraseña incorrecta';
          } else {
            Swal.fire('Inicio de sesión correcto!', 'Bienvenido!', 'success');
            //alert('Inicio de sesión correcto');
            //this.mensaje_ok = 'Inicio de sesion correcto';
            //estas variables auxiliares contiene los datos de la bd
            this.token = response.token;
            this.nombre = response.nombre;
            this.identity = response.id;
            this.rol2 = response.rol;
            localStorage.setItem('token', this.token);
            localStorage.setItem('nombres', this.nombre);
            localStorage.setItem('id', this.identity);
            localStorage.setItem('rol', this.rol2);

            this.usuarioService.login(this.formValue.value).subscribe(
              (response) => {
                console.log(response);
                if (this.rol2 == 'rescatista') {
                  this.router.navigate(['crearMascota']);
                } else {
                  this.router.navigate(['']);
                }
              },
              (error) => {
                console.log(error);
                alert(error);
              }
            );
          }
        },
        (error) => {
          console.log(error);
          alert(error);
        }
      );
    }
  }
  cerrarAlerta() {
    this.mensaje_error = '';
  }

  // crear usuario:
  obtenerCampos() {
    this.formValue = this.formBuilder.group({
      nombres: [''],
      primerApellido: [''],
      segundoApellido: [''],
      cedula: [''],
      correo: [''],
      contrasena: [''],
      ciudad: [''],
      rol: [''],
    });
  }

  crearUsuario() {
    this.usuariosModel.nombres = this.formValue.value.nombres;
    this.usuariosModel.primerApellido = this.formValue.value.primerApellido;
    this.usuariosModel.segundoApellido = this.formValue.value.segundoApellido;
    this.usuariosModel.cedula = this.formValue.value.cedula;
    this.usuariosModel.correo = this.formValue.value.correo;
    this.usuariosModel.contrasena = this.formValue.value.contrasena;
    this.usuariosModel.ciudad = this.formValue.value.ciudad;
    this.usuariosModel.rol = this.formValue.value.rol;

    if (this.usuariosModel.nombres == '') {
      this.mensaje_error = 'El campo nombre no puede estar vacio';
    }
    if (this.usuariosModel.primerApellido == '') {
      this.mensaje_error = 'El campo primer Apellido no puede estar vacio';
    }
    if (this.usuariosModel.segundoApellido == '') {
      this.mensaje_error = 'El campo segundo Apellido no puede estar vacio';
    }
    if (this.usuariosModel.cedula == '') {
      this.mensaje_error = 'El campo cedula no puede estar vacio';
    }

    if (this.usuariosModel.correo == '') {
      this.mensaje_error = 'El campo correo no puede estar vacio';
    }
    if (this.usuariosModel.contrasena == '') {
      this.mensaje_error = 'El campo contrasena no puede estar vacio';
    }

    if (this.usuariosModel.rol == '') {
      this.mensaje_error = 'El campo rol no puede estar vacio';
    }
    if (this.usuariosModel.ciudad == '') {
      this.mensaje_error = 'El campo ciudad no puede estar vacio';
    } else {
      this.usuarioService.crear(this.usuariosModel).subscribe(
        (res) => {
          console.log(res);
          if (res.mensaje == 'Este usuario ya existe, trata con uno nuevo') {
            this.mensaje_error = res.mensaje;
          } else {
            this.mensaje_ok = 'Se registro correctamente';
            setTimeout(() => {
              this.router.navigate(['login']);
            }, 2000);
            //this.router.navigate(['crearMascota']);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
