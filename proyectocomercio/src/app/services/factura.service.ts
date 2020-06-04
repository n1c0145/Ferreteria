import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Factura } from '../modelos/factura.interface';
@Injectable() // servicio
export class FacturaService {
  private url = 'http://localhost:1337/factura';

  constructor(private _httpClient: HttpClient) {}

  metodoGet(): Observable<Factura[]> {
    return this._httpClient.get<Factura[]>(this.url);
  }
 
  metodoPost(url: string, datos) {
    return this._httpClient.post(url, datos);
  }

  
}