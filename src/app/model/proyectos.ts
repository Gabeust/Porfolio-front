export class Proyectos {
    id?: number;
    nombre: string;
    descripcion: string;
    img: string;
    url: string;

    constructor(nombre: string, descripcion: string, img: string, url: string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.img = img;
        this.url = url;
    }

}
