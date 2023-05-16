import { Component } from '@angular/core';
import { Competencias } from '../model/competencias';
import { CompetenciasService } from '../servicios/competencias.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.component.html',
  styleUrls: ['./competencias.component.css']
})
export class CompetenciasComponent {
competencias : Competencias[] = []; 
modalSwitch: boolean;
porcentajeMaximo: number = 100;
porcentajeValido: boolean = true;

constructor(private competenciasS: CompetenciasService, private tokenService : TokenService){}
    
isLogged = false;


  
  ngOnInit(): void {
   this.CargarCompetencias();
   if(this.tokenService.getToken()){
    this.isLogged = true;
   } else{
    this.isLogged = false;
   }
  }
  CargarCompetencias():void{
    this.competenciasS.lista().subscribe(data =>{
      this.competencias = data;
    })
  }

  Delete(id?: number){
    if(id != undefined){
      if (window.confirm("¿Estás seguro de que deseas eliminar esta competencia?")) {
        this.competenciasS.delete(id).subscribe(
          data =>{
            this.CargarCompetencias();
          }, err =>{
            alert ("No se pudo eliminar")
          }
        )
      }
    }
  }

  colorPorcentaje = (porcentaje: number) => {
    if (porcentaje < 25) {
      return { backgroundColor: 'purple' };
    } else if (porcentaje < 61) {
      return { backgroundColor: 'orange' };
    } else if (porcentaje < 71) {
      return { backgroundColor: 'yellow' };
    } else if (porcentaje < 81) {
      return { backgroundColor: 'blue' };
    } else if (porcentaje < 91) {
      return { backgroundColor: 'red' };
    } else  (porcentaje < 100) 
      return { backgroundColor: 'green' };
  }
}