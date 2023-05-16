import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../servicios/proyectos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from '../model/proyectos';
import { ImagenService } from '../servicios/imagen.service';

@Component({
  selector: 'app-editarproy',
  templateUrl: './editarproy.component.html',
  styleUrls: ['./editarproy.component.css']
})
export class EditarproyComponent implements OnInit {
   proyectos: Proyectos = null

  constructor(private proyectosS: ProyectosService, private activatedrouter: ActivatedRoute,
     private router: Router, public imagenService: ImagenService) { }


     ngOnInit(): void {
      const id = this.activatedrouter.snapshot.params['id'];
     this.proyectosS.detail(id).subscribe(data => { 
       this.proyectos = data;
     }, err =>{
       alert("Error al modificar informacion");
       this.router.navigate(['']);
     }
     )
 }
 
 onUpdate(): void{
   const id = this.activatedrouter.snapshot.params['id'];
   this.proyectos.img = this.imagenService.url
    this.proyectosS.update(id, this.proyectos).subscribe(
     data => {  alert("Persona actiualizada con exito!");
       this.router.navigate([''])
   }, err =>{
     alert("No se pudo modificar persona");
     this.router.navigate(['']);
   }
   )
 }
 
 uploadImage($event:any){
   const id = this.activatedrouter.snapshot.params['id'];
   const name = "proyectos_" + id;
   this.imagenService.uploadImage($event, name)
 }
 }
    

//   ngOnInit(): void {
//        const id = this.activatedrouter.snapshot.params['id'];
//     this.proyectosS.detail(id).subscribe(data => {
//       this.proyectos = data;
//     }, err => {
//       alert("Error al modificar proyecto");
//       this.router.navigate(['']);
//     }
//     )

//   }


//   onUpdate(): void {
//     const id = this.activatedrouter.snapshot.params['id'];
//     this.proyectosS.update(id, this.proyectos).subscribe(
//       data => {
//         alert("proyecto actualizado con exito!");
//         this.router.navigate([''])
//       }, err => {
//         alert("No se pudo modificar proyecto");
//         this.router.navigate(['']);
//       }
//     )
//   }
//   uploadImage($event: any) {
    
//     const id = this.activatedrouter.snapshot.params['id'];
//     const name = "proyecto_" + id;
//     this.imagenService.uploadImage($event, name);
//   }
// }




