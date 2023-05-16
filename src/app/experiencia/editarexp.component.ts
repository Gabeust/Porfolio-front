import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../model/experiencia';
import { SExperienciaService } from '../servicios/s-experiencia.service';
import {ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editarexp',
  templateUrl: './editarexp.component.html',
  styleUrls: ['./editarexp.component.css']
})
export class EditarexpComponent implements OnInit {
  expe : Experiencia = null;
  ingresoValido: boolean = true;
  egresoValido: boolean = true;

  constructor(private sExperiencia: SExperienciaService, private activatedrouter: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = this.activatedrouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data =>{
        this.expe = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }

    )
  }
    
    onUpdate(): void{
      const id = this.activatedrouter.snapshot.params['id'];
      this.sExperiencia.update(id, this.expe).subscribe(
        data => {  alert("Experiencia actiualizada con exito!");
          this.router.navigate([''])
      }, err =>{
        alert("No se pudo modificar experiencia");
        this.router.navigate(['']);
      }
      )
    }

    validarAnio() {
      if (this.expe.ingreso.toString().length > 4) {
        this.ingresoValido = false;
      } else {
        this.ingresoValido = true;
      }
    }
    validarAnioEgreso() {
      if (this.expe.ingreso.toString().length > 4) {
        this.egresoValido = false;
      } else {
        this.egresoValido = true;
      }
      this.egresoValido = this.expe.egreso && this.expe.egreso.toString().length <= 4 && this.expe.egreso > this.expe.ingreso;
    
    
    }

  }


