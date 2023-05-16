import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = Environment.apiUrl + 'personas/';

  constructor(private httpClient: HttpClient) { }
  public lista(): Observable<persona[]> {
    return this.httpClient.get<persona[]>(this.URL + 'lista');
  }
  public detail(id: number): Observable<persona> {
    return this.httpClient.get<persona>(this.URL + `detail/${id}`);

  }

  public save(Persona: persona): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'crear', Persona);

  }

  public update(id: number, Persona: persona): Observable<any> {
    return this.httpClient.put<any>(this.URL + `editar/${id}`, Persona);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `eliminar/${id}`);
  }

}

