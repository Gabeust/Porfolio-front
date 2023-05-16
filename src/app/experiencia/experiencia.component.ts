import { Component, OnInit } from '@angular/core';
import { TokenService } from '../servicios/token.service';
import { Experiencia } from '../model/experiencia';
import { SExperienciaService } from '../servicios/s-experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  exp: Experiencia[] = [];


  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;


  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => { this.exp = data; })
  }
  delete(id?: number) {
    if (id != undefined) {
      if (window.confirm("¿Estás seguro de que deseas eliminar esta experiencia?")) {
        this.sExperiencia.delete(id).subscribe(
          data => {
            this.cargarExperiencia();
          }, err => {
            alert("No se pudo borrar experiencia");
          }
        )
      }
    }
  }
}