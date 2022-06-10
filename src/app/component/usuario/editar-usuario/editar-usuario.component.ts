import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { usuarios } from '../../models/usuarios.models';
import { UsuarioService } from 'src/app/sevicios/usuario.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  identity: any;
  usuario: any;
  id!: any;
  token: any;
  formValue!: FormGroup;
  rol:any;

  usuarioModel : usuarios = new usuarios();
  error_message !:any;
  success_message !:any;

  constructor(
    private formBuilder:FormBuilder,
    private route : ActivatedRoute,
    private router:Router,
    private usuarioService: UsuarioService
  ) {

    this.rol= this.usuarioService.obtenerRol();
    this.token= this.usuarioService.obtenerToken();
    this.identity = this.usuarioService.obtenerIdentidad();
  }

  ngOnInit(): void {
    this.obtenerCampos();
  }
  obtenerCampos(){
    this.formValue = this.formBuilder.group({
  nombres : [''],
  primerApellido : [''],
  segundoApellido : [''],
  cedula : [''],
  correo : [''],
  ciudad : [''],
  contrasena : ['']
    })
this.obtener();
console.log(this.identity)
  }
  obtener(){
    this.route.params.subscribe(params=>{
      //this.id = params['id'];
      this.id = this.identity;

      this.usuarioService.obtenerUsuario(this.id).subscribe(
        response=>{
          this.usuario= response
          console.log(this.usuario)
          this.formValue.controls['nombres'].setValue(this.usuario.nombres)
          this.formValue.controls['primerApellido'].setValue(this.usuario.primerApellido)
          this.formValue.controls['segundoApellido'].setValue(this.usuario.segundoApellido)
          this.formValue.controls['cedula'].setValue(this.usuario.cedula)
          this.formValue.controls['correo'].setValue(this.usuario.correo)
          this.formValue.controls['ciudad'].setValue(this.usuario.ciudad)
          this.formValue.controls['contrasena'].setValue(this.usuario.contrasena)

          this.usuarioModel._id = this.usuario._id

        /*   this.usuarioService.obtenerCategoria().subscribe(
            response=>{
              this.categorias=response
              console.log(this.categorias)
            }
          ) */

        }
      )
    })


  }
  actualizarMascota(){

    this.usuarioModel.nombres= this.formValue.value.nombres;
    this.usuarioModel.primerApellido= this.formValue.value.primerApellido;
    this.usuarioModel.segundoApellido= this.formValue.value.segundoApellido;
    this.usuarioModel.cedula= this.formValue.value.cedula;
    this.usuarioModel.correo= this.formValue.value.correo;
    this.usuarioModel.ciudad= this.formValue.value.ciudad;
    this.usuarioModel.contrasena= this.formValue.value.contrasena;


    this.usuarioService.actualizarUsuario(this.usuarioModel,this.usuarioModel._id)
    .subscribe(res=>{

      Swal.fire(
        'Usuario actualizado!',
        'You clicked the button!',
        'success'
       )
       setTimeout(() => {
          this.router.navigate(['crearMascota']);
        }, 2000);
    })


  }
}

