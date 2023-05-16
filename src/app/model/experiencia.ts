export class Experiencia {
    id?: number;
    empresa: string;
    descripcion : string;
    ingreso: number;
    egreso: number;

    constructor(empresa: string, descripcion : string, ingreso: number, egreso: number){
        this.empresa = empresa;
        this.descripcion = descripcion;
        this.ingreso = ingreso;
        this.egreso = egreso;
    }



}
