import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {
  empresa: string = '';
  descripcion: string = '';
  ingreso: number;
  egreso: number;
  ingresoValido: boolean = true;
  egresoValido: boolean = true;

  constructor(private Sexperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void { }

  onCreate(): void {
    const expe = new Experiencia(this.empresa, this.descripcion, this.ingreso, this.egreso);
    this.Sexperiencia.save(expe).subscribe(data => {
      alert("Experiencia creada con exito!");
      this.router.navigate(['']);
    }, err => {
      alert("Error al cargar nueva experiencia");
      this.router.navigate(['']);
    }
    )

  }

  validarAnio() {
    if (this.ingreso.toString().length > 4) {
      this.ingresoValido = false;
    } else {
      this.ingresoValido = true;
    }
  }
  validarAnioEgreso() {
    if (this.ingreso.toString().length > 4) {
      this.egresoValido = false;
    } else {
      this.egresoValido = true;
    }
    this.egresoValido = this.egreso && this.egreso.toString().length <= 4 && this.egreso > this.ingreso;


  }
}