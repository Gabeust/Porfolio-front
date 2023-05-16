import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  URL = Environment.apiUrl + 'experiencia/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.URL + 'lista');

  }

  public detail(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.URL + `detail/${id}`);

  }

  public save(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'crear', experiencia);

  }

  public update(id:number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.URL + `editar/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `eliminar/${id}`);
  }

}

