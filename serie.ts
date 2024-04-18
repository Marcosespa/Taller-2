export class Serie {
  id: number;
  nombre: string;
  plataforma: string;
  temporadas: number;
  resumen: string;
  link: string;
  imagen: string;
  constructor(id:number,nombre:string,plataforma:string,temporadas:number,resumen:string,link:string,imagen:string){
    this.id = id
    this.nombre = nombre;
    this.plataforma = plataforma;
    this.temporadas=temporadas;
    this.resumen = resumen;
    this.link = link;
    this.imagen = imagen;
  
  }

}