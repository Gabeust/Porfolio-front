export class Certificaciones {
    id: number;
    titulo: string;
    institucion: string;
    anio: number;



    constructor(titulo: string, institucion:string, anio:number){
        this.titulo = titulo;
        this.institucion = institucion;
        this.anio = anio;
    }
}
