import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certificaciones } from '../model/certificaciones';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CertificacionesService {
  URL = Environment.apiUrl + 'certificaciones/';


  constructor(private httpClient : HttpClient) { }
  public lista(): Observable<Certificaciones[]>{
    return this.httpClient.get<Certificaciones[]>(this.URL + 'lista');
  }
  public detail(id: number): Observable<Certificaciones> {
    return this.httpClient.get<Certificaciones>(this.URL + `detail/${id}`);

  }

  public save(certificaciones: Certificaciones): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'crear', certificaciones);

  }

  public update(id:number, certificaciones: Certificaciones): Observable<any>{
    return this.httpClient.put<any>(this.URL + `editar/${id}`, certificaciones);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `eliminar/${id}`);
  }

}

