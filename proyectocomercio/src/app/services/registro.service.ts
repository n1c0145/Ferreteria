import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Clientes } from "../../app/modelos/clientes.interface";
import { Observable } from "rxjs/internal/Observable";

@Injectable() // servicio
export class RegistroService {
  private url = 'http://localhost:1337/cliente';

  constructor(private  _httpClient: HttpClient) {}



 
   metodoGet(): Observable<Clientes[]>{
     return this._httpClient.get<Clientes[]>(this.url)
   }

   metodoPost(url: string, datos) {
     return this._httpClient.post(url, datos);
   }

   metodoPut(cliente: Clientes): Observable<Clientes>{
    this.url = `${this.url}/${cliente.id}`;
return this._httpClient.put<Clientes>(this.url , cliente)
   }
 
metodoDelete(id: string):Observable<{}>{
  this.url = `${this.url}/${id}`;
  return this._httpClient.delete(this.url)
}

}