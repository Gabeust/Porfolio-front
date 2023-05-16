import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Competencias } from '../model/competencias';
import { Observable } from 'rxjs';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CompetenciasService {
  URL = Environment.apiUrl + 'competencias/';


  constructor(private httpClient : HttpClient) { }
  public lista(): Observable<Competencias[]>{
    return this.httpClient.get<Competencias[]>(this.URL + 'lista');
  }
  public detail(id: number): Observable<Competencias> {
    return this.httpClient.get<Competencias>(this.URL + `detail/${id}`);

  }

  public save(competencias: Competencias): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'crear', competencias);

  }

  public update(id:number, competencias: Competencias): Observable<any>{
    return this.httpClient.put<any>(this.URL + `editar/${id}`, competencias);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `eliminar/${id}`);
  }

}

