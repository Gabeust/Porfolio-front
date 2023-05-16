import { Component, OnInit } from '@angular/core';
import { CompetenciasService } from '../servicios/competencias.service';
import { Router } from '@angular/router';
import { Competencias } from '../model/competencias';

@Component({
  selector: 'app-nuevacomp',
  templateUrl: './nuevacomp.component.html',
  styleUrls: ['./nuevacomp.component.css']
})
export class NuevacompComponent implements OnInit {
  nombre: string;
  porcentaje: number;
  url : string;
  porcentajeMaximo: number = 100;
  porcentajeValido: boolean = true;
  
  constructor(private competenciasS : CompetenciasService, private router : Router){ }

  ngOnInit(): void {
    
  }
  
  onCreate(): void{
    const competencias = new Competencias(this.nombre, this.porcentaje, this.url)
      this.competenciasS.save(competencias).subscribe(
        data =>{
        alert("Competencia creada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("fallo al cargar competencia");
        this.router.navigate(['']);
      }
      )
  }

    validarporc() {
      if (this.porcentaje < 1 || this.porcentaje > this.porcentajeMaximo) {
        this.porcentajeValido = false;
      } else {
        this.porcentajeValido = true;
      }
    }
    
}