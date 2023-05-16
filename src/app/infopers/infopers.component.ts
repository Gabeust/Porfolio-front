import { Component, OnInit } from '@angular/core';
import { persona } from '../model/persona.model';
import { PersonaService } from '../servicios/persona.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-infopers',
  templateUrl: './infopers.component.html',
  styleUrls: ['./infopers.component.css']
})
export class InfopersComponent implements OnInit{
  persona: persona = new persona("","","","",);
   
  constructor(public personaService: PersonaService, private tokenService: TokenService) { }
isLogged = false;

ngOnInit(): void {
this.cargarPersona();
if (this.tokenService.getToken()) {
  this.isLogged = true;
} else {
  this.isLogged = false;
}

 
}
cargarPersona(): void {
  this.personaService.detail(1).subscribe(data => { this.persona = data; })

}
}