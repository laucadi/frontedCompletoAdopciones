import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Input, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MascotaService } from 'src/app/sevicios/mascota.service';
import { Mascota } from '../../models/mascotas.models';
import { UsuarioService } from 'src/app/sevicios/usuario.service';

@Component({
  selector: 'app-form-crear',
  templateUrl: './form-crear.component.html',
  styleUrls: ['./form-crear.component.css'],
})
export class FormCrearComponent implements OnInit {
  @Input() showModal: boolean = false;
  @Output() onCloseModal = new EventEmitter<any>();

  public startDate = new Date().toISOString().slice(0, 10);
  public estados = [
    { label: 'Si', value: true },
    { label: 'No', value: false },
  ];
  public sexos = [
    { label: 'Macho', value: 'macho' },
    { label: 'Hembra', value: 'hembra' },
  ];
  public especies = [
    { label: 'Perro(a)', value: 'perro' },
    { label: 'gato(a)', value: 'gato' },
  ];
  public imagenSubir: any;
  public file!: File;
  public mascota: any;
  public identity: any;

  public archivos: any[] | undefined;
  imagenUrl!: any;
  public imgSelect: String | ArrayBuffer | any;

  error_message!: any;
  success_message!: any;

  constructor(
    private fb: FormBuilder,
    private mascotaService: MascotaService,
    private usuarioService: UsuarioService
  ) {
    this.mascota = new Mascota('', '', '', '', true, '', '', '', '', 1);
    this.identity = this.usuarioService.obtenerIdentidad();
  }

  formModal: FormGroup = this.fb.group({
    nombres: ['', [Validators.required]],
    especie: ['', [Validators.required]],
    sexo: ['', [Validators.required]],
    raza: ['', [Validators.required, Validators.minLength(4)]],
    estadoDeEsterilizacion: ['', [Validators.required]],
    estadoDeVacunacion: ['', [Validators.required]],
    imagen: [this.file],
    descripcionDeLaMascota: [
      '',
      [Validators.required, Validators.minLength(15)],
    ],
    fechaDeNacimiento: [new Date().toISOString(), [Validators.required]],
  });

  ngOnInit(): void {}

  public onPress(element: MouseEvent) {
    const node = element.target as HTMLElement;
    if (node.id === 'outer') {
      this.onCloseModal.emit();
    }
  }

  public calcularEdad() {
    const fechaDeNacimiento = this.mascota.fechaDeNacimiento;
    const anosCompletos =
      Math.floor(new Date().getTime() - new Date(fechaDeNacimiento).getTime()) /
      (1000 * 60 * 60 * 24 * 365);

    const anos = Math.floor(anosCompletos);
    const meses = Math.floor((anosCompletos % 1) * 12);

    return `tiene ${anos} años y ${meses} meses`;
  }

  // crearMascota() {
  //   console.log(this.mascota.valid);

  //   if (this.formModal.valid) {
  //     this.mascotaService.crearMascota(this.formModal.value).subscribe(
  //       (response) => {
  //         alert('mascota creada');
  //         this.formModal.reset();
  //         this.onCloseModal.emit();
  //       },
  //       (error) => {
  //         alert(error);
  //       }
  //     );
  //   }
  // }
  //nuevo metodo, este sirve para cargar las imagenes
  onSubmit(mascotaForm: any) {
    if (mascotaForm.valid) {
      if (this.file != this.imgSelect) {
        this.mascotaService
          .insert_mascota({
            nombre: mascotaForm.value.nombre,
            especie: mascotaForm.value.especie,
            sexo: mascotaForm.value.sexo,
            raza: mascotaForm.value.raza,
            estadoDeEsterilizacion: mascotaForm.value.estadoDeEsterilizacion,
            estadoDeVacunacion: mascotaForm.value.estadoDeVacunacion,
            descripcionDeLaMascota: mascotaForm.value.descripcionDeLaMascota,
            fechaDeNacimiento: mascotaForm.value.fechaDeNacimiento,
            imagen: this.file,
            idusuario: this.identity,
          })
          .subscribe(
            (response) => {
              this.success_message = 'La mascota se correctamente';
              alert('La mascota se correctamente');
              this.mascota = new Mascota(
                '',
                '',
                '',
                '',
                true,
                '',
                '',
                '',
                '',
                1
              );
              this.imgSelect = '../../../../assets/img/16.png';
              this.imagenUrl = '';
              this.file = this.imgSelect;
            },
            (error) => {}
          );
      } else {
        this.error_message = 'Favor cargue una imagen';
        alert('Favor cargue una imagen');
      }
    } else {
      this.error_message = 'Complete correctamente el formulario';
      alert('Favor completar los datos del formulario');
    }
  }

  seleccionarImagen(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];

      const reader = new FileReader();
      reader.onload = (e) => (this.imgSelect = reader.result);
      reader.readAsDataURL(this.file);
      console.log('soy el file ' + this.file);
    }
  }
  reloadCurrentPage() {
    window.location.reload();
  }
}
