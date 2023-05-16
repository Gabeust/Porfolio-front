import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { Observable, tap } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
  export class AuthService {
 
    URL = Environment.apiUrl + 'auth/';

    constructor(private httpClient: HttpClient) { }
  
    public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
      return this.httpClient.post<any>(this.URL + 'nuevo', nuevoUsuario);
    }
  
    public login(LoginUsuario: LoginUsuario): Observable<JwtDto>{
      return this.httpClient.post<JwtDto>(this.URL + 'login', LoginUsuario)
    
    }
   
  }
