import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuryService {

  private baseUrl = 'http://localhost:8080/gestionapi_back/api/v1/jurys';

  constructor(private http: HttpClient) { }

  getJury(id_jury: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id_jury}`);
  }

  createJury(jury: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, jury);
  }

  updateJury(id_jury: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id_jury}`, value);
  }

  deleteJury(id_jury: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id_jury}`, { responseType: 'text' });
  }

  getJurysList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
