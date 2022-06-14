/* export class mascota {
  public _id = 0;
  public nombre = '';
  public edad = '';
  public especie = '';
  public raza = '';
  public tamano = '';
  public imagen!: '';
  public municipio = '';
  public idusuario = '';
} */

export class Mascota {
  constructor(
    public _id: string,
    public nombre: string,
    public especie: string,
    public raza: string,
    public estadoDeEsterilizacion: boolean,
    public estadoDeVacunacion: string,
    public descripcionDeLaMascota: any,
    public fechaDeNacimiento: any,
    public idusurio: string,
    public imagen: any
  ) {}
}
