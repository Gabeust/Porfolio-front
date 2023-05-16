export class Competencias {
    id: number;
    nombre: string;
    porcentaje: number;
    url: string;



    constructor(nombre: string, porcentaje:number, url:string){
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.url = url;
    }
}
