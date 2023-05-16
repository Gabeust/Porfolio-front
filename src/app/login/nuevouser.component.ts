import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevouser',
  templateUrl: './nuevouser.component.html',
  styleUrls: ['./nuevouser.component.css']
})




export class NuevouserComponent implements OnInit {
  nombre: string = '';
  nombreUsuario: string = '';
  email: string = '';
  password: string = '';
  roles: string[] = [];

  
  


  constructor(private formBuilder: FormBuilder, private auhtserv: AuthService, private router: Router) {

  }
  ngOnInit(): void {
    const form = document.getElementById('registrationForm') as HTMLFormElement;

form.addEventListener('submit', (event) => {
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }
  form.classList.add('was-validated');
});

   }



  onCreate(): void {
    const newUser = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password, this.roles)
    this.auhtserv.nuevo(newUser).subscribe(
      data => {
        alert("Usuario creado correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("fallo al crear nuevo usuario");
        this.router.navigate(['']);
      }
    )
  }
   



}

