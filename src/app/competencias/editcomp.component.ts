import { Component } from '@angular/core';
import { Competencias } from '../model/competencias';
import { CompetenciasService } from '../servicios/competencias.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editcomp',
  templateUrl: './editcomp.component.html',
  styleUrls: ['./editcomp.component.css']
})
export class EditcompComponent {

  competencia:  Competencias = null;
  porcentajeMaximo: number = 100;
  porcentajeValido: boolean = true;

  constructor(private competenciaS: CompetenciasService, private activatedrouter: ActivatedRoute, private router: Router)  {}
  
  ngOnInit(): void {
    const id = this.activatedrouter.snapshot.params['id'];
    this.competenciaS.detail(id).subscribe(data => { 
      this.competencia = data;
    }, err =>{
      alert("Error al modificar competencia");
      this.router.navigate(['']);
    }
    )

   }
    
   onUpdate(): void{
    const id = this.activatedrouter.snapshot.params['id'];
    this.competenciaS.update(id, this.competencia).subscribe(
      data => {  alert("Competencia actiualizada con exito!");
        this.router.navigate([''])
    }, err =>{
      alert("No se pudo modificar competencia");
      this.router.navigate(['']);
    }
    )
  }
  validarporc() {
    if (this.competencia.porcentaje < 1 || this.competencia.porcentaje > this.porcentajeMaximo) {
      this.porcentajeValido = false;
    } else {
      this.porcentajeValido = true;
    }
  }
  
}
