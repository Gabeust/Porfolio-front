import { Component, OnInit } from '@angular/core';
import { Certificaciones } from '../model/certificaciones';
import { CertificacionesService } from '../servicios/certificaciones.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editcerti',
  templateUrl: './editcerti.component.html',
  styleUrls: ['./editcerti.component.css']
})
export class EditcertiComponent implements OnInit{
  certificacion:  Certificaciones = null;
  anio : number;
  anioValido : boolean= true;

  constructor(private certificacionS: CertificacionesService, private activatedrouter: ActivatedRoute, private router: Router)  {}
  
  ngOnInit(): void {
    const id = this.activatedrouter.snapshot.params['id'];
    this.certificacionS.detail(id).subscribe(data => { 
      this.certificacion = data;
    }, err =>{
      alert("Error al modificar certificaciones");
      this.router.navigate(['']);
    }
    )

   }
   validarAnio() {
    if (this.certificacion.anio.toString().length > 4) {
      this.anioValido = false;
    } else {
      this.anioValido = true;
    }
  }
    
   onUpdate(): void{
    const id = this.activatedrouter.snapshot.params['id'];
    this.certificacionS.update(id, this.certificacion).subscribe(
      data => {  alert("Certificacion actiualizada con exito!");
        this.router.navigate([''])
    }, err =>{
      alert("No se pudo modificar certificacion");
      this.router.navigate(['']);
    }
    )
  }

}


