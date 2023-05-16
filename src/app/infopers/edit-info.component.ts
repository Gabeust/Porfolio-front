import { Component, OnInit } from '@angular/core';
import { persona } from '../model/persona.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from '../servicios/persona.service';
import { ImagenService } from '../servicios/imagen.service';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {
  persona: persona = null;

  constructor(private activatedRouter: ActivatedRoute, private personaService: PersonaService, 
    private router: Router, public imagenService: ImagenService,){}


  ngOnInit(): void {
     const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(data => { 
      this.persona = data;
    }, err =>{
      alert("Error al modificar informacion");
      this.router.navigate(['']);
    }
    )
}

onUpdate(): void{
  const id = this.activatedRouter.snapshot.params['id'];
  this.persona.img = this.imagenService.url
   this.personaService.update(id, this.persona).subscribe(
    data => {  alert("Persona actiualizada con exito!");
      this.router.navigate([''])
  }, err =>{
    alert("No se pudo modificar persona");
    this.router.navigate(['']);
  }
  )
}

uploadImage($event:any){
  const id = this.activatedRouter.snapshot.params['id'];
  const name = "perfil_" + id;
  this.imagenService.uploadImage($event, name)
}
}
