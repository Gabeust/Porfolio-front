import { Component, OnInit } from '@angular/core';
import { Certificaciones } from '../model/certificaciones';
import { CertificacionesService } from '../servicios/certificaciones.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.css']
})
export class CertificacionesComponent implements OnInit{
  certificacion: Certificaciones[] = [];
  
  constructor(private certificacionesS: CertificacionesService, private tokenService : TokenService){}
    isLogged = false;

  
  ngOnInit(): void {
   this.CargarCertificacion();
   if(this.tokenService.getToken()){
    this.isLogged = true;
   } else{
    this.isLogged = false;
   }
  }
  CargarCertificacion():void{
    this.certificacionesS.lista().subscribe(data =>{
      this.certificacion = data;
    })
  }

  Delete(id?: number){
    if(id != undefined){
      if (window.confirm("¿Estás seguro de que deseas eliminar esta certificación?")) {
        this.certificacionesS.delete(id).subscribe(
          data =>{
            this.CargarCertificacion();
          }, err =>{
            alert ("No se pudo eliminar");
          }
        )
      }
    }
  }



}
