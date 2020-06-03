import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Productos } from "../../app/modelos/productos.interface";
import { Observable } from "rxjs/internal/Observable";

@Injectable() // servicio
export class ProductosService {
  private url = 'http://localhost:1337/productos';

  constructor(private  _httpClient: HttpClient) {}

   metodoGet(): Observable<Productos[]>{
     return this._httpClient.get<Productos[]>(this.url)
   }

   metodoPost(url: string, datos) {
     return this._httpClient.post(url, datos);
   }

   metodoPut(cliente: Productos): Observable<Productos>{
    this.url = `${this.url}/${cliente.id}`;
return this._httpClient.put<Productos>(this.url , cliente)
   }
 
metodoDelete(id: string):Observable<{}>{
  this.url = `${this.url}/${id}`;
  return this._httpClient.delete(this.url)
}

}