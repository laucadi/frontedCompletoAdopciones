import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carta-mascota',
  templateUrl: './carta-mascota.component.html',
  styleUrls: ['./carta-mascota.component.css']
})
export class CartaMascotaComponent implements OnInit {
  @Input() mascota: any = {};
  @Input() botonDeAdopcion: boolean = false;
  @Output() onEliminarMascota = new EventEmitter<any>();
  public base_url = environment.url;

  constructor() { }

  ngOnInit(): void {
  }

  public calcularEdad(fecha: string) {
    const fechaDeNacimiento = new Date(fecha);
    const anosCompletos =
      Math.floor(new Date().getTime() - new Date(fechaDeNacimiento).getTime()) /
      (1000 * 60 * 60 * 24 * 365);

    const anos = Math.floor(anosCompletos);
    const meses = Math.floor((anosCompletos % 1) * 12);

    if (anos < 1) return `${meses} meses`;
    if (meses === 0 && anos === 1) return `${anos} año`;
    if (meses === 0) return `${anos} años`;
    return `${anos} años y ${meses} meses`;
  }
  
  public eliminarMascota () {
    this.onEliminarMascota.emit()
  }
}
