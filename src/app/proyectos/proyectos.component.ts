import { Component } from '@angular/core';
import { Proyectos } from '../model/proyectos';
import { ProyectosService } from '../servicios/proyectos.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  proyec: Proyectos[] = [];
 
constructor(private proyectosS: ProyectosService, private tokenService : TokenService){}
    
isLogged = false;



  ngOnInit(): void {
    this.CargarProyectos();
    if(this.tokenService.getToken()){
     this.isLogged = true;
    } else{
     this.isLogged = false;
    }
   }
   CargarProyectos():void{
     this.proyectosS.lista().subscribe(data =>{
       this.proyec = data;
     })
   }
 
   Delete(id?: number){
     if(id != undefined){
       if (window.confirm("¿Estás seguro de que deseas eliminar este proyecto?")) {
         this.proyectosS.delete(id).subscribe(
           data =>{
             this.CargarProyectos();
           }, err =>{
             alert ("No se pudo eliminar")
           }
         )
       }
     }
   }
 

}

