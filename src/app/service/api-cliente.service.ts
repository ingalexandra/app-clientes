import { Injectable } from '@angular/core';
import {Cliente} from '../model/cliente'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiClienteService {
  url:String = "http://localhost:8080/apiCliente/rest/";
  constructor(public http: HttpClient) { }

  getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url + "clientes");
  }
}
