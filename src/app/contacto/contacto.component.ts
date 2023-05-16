import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  nombre: string;
  telefono: string;
  email: string;
  mensaje: string;
  enviado: boolean = false;
  enviadoExitoso: boolean = false;
  formulario: any;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]{3,23}')])],
      telefono: ['', Validators.compose([Validators.required, Validators.pattern('^\\+?\\d{0,3}[-\\.\\s]?\\d{4}[-\\.\\s]?\\d{4}$')])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      mensaje: ['', Validators.compose([Validators.required, Validators.maxLength(140)])]
    });
  }
  enviarFormulario() {
    const endpoint = 'https://formspree.io/f/xzbqolpd'; 
      const data = {
      nombre: this.nombre,
      telefono: this.telefono,
      email: this.email,
      mensaje: this.mensaje
    };
    this.http.post(endpoint, data).subscribe(response => {
      console.log('Respuesta:', response);
      this.enviado = true;
      this.enviadoExitoso = true;
      this.nombre = '';
      this.telefono = '';
      this.email = '';
      this.mensaje = '';
      setTimeout(() => {
        this.enviadoExitoso = false;
      }, 5000);
    }, error => {
      console.error('Error:', error);
    });
  }
}



