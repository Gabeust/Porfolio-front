import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../model/proyectos';
import { ProyectosService } from '../servicios/proyectos.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-nuevo-proy',
  templateUrl: './nuevo-proy.component.html',
  styleUrls: ['./nuevo-proy.component.css']
})
export class NuevoProyComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';
  img: string = '';
  url: string = '';
 
  constructor(private proyectoS: ProyectosService, private router: Router,    private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {


  }
  onCreate($event: any): void {
    const proyec = new Proyectos(this.nombre, this.descripcion, this.img, this.url);
     this.proyectoS.save(proyec).subscribe(data => {
      alert("Proyecto creado con éxito!");
      this.router.navigate(['']);
    }, err => {
      alert("Error al cargar nuevo proyecto");
      this.router.navigate(['']);
    });
  }
  
    
  
}