import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Environment } from "src/environments/environment";
import { Proyectos } from "../model/proyectos";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProyectosService {
   
  URL = Environment.apiUrl + 'proyectos/';

  constructor(private httpClient: HttpClient) { }
  public lista(): Observable<Proyectos[]> {
    return this.httpClient.get<Proyectos[]>(this.URL + 'lista');
  }
  public detail(id: number): Observable<Proyectos> {
    return this.httpClient.get<Proyectos>(this.URL + `detail/${id}`);

  }

  public save(proyectos: Proyectos): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'crear', proyectos);

  }

  public update(id: number, proyectos: Proyectos): Observable<any> {
    return this.httpClient.put<any>(this.URL + `editar/${id}`, proyectos);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `eliminar/${id}`);
  }

}

