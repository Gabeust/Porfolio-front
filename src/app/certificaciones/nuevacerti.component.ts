import { Component, OnInit } from '@angular/core';
import { CertificacionesService } from '../servicios/certificaciones.service';
import { Router } from '@angular/router';
import { Certificaciones } from '../model/certificaciones';

@Component({
  selector: 'app-nuevacerti',
  templateUrl: './nuevacerti.component.html',
  styleUrls: ['./nuevacerti.component.css']
})
export class NuevacertiComponent implements OnInit {
  titulo: string;
  institucion: string;
  anio : number;
  anioValido: boolean = true;


  constructor(private certificacionesS : CertificacionesService, private router : Router){ }

  ngOnInit(): void {
    
  }
  
  onCreate(): void{
    const certificaciones = new Certificaciones(this.titulo, this.institucion, this.anio)
      this.certificacionesS.save(certificaciones).subscribe(
        data =>{
        alert("Certificacion creada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("fallo al cargar certificacion");
        this.router.navigate(['']);
      }
      )
  }

  validarAnio() {
    if (this.anio.toString().length > 4) {
      this.anioValido = false;
    } else {
      this.anioValido = true;
    }
  }
  cancelar(){
    this.router.navigate(['/certificaciones']);
  }

}
