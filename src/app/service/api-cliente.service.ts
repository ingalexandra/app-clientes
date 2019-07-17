import { Injectable } from '@angular/core';
import {Cliente} from '../model/cliente'

@Injectable({
  providedIn: 'root'
})
export class ApiClienteService {
  clientes:Cliente[] = [
    {
      nombre:"alexa",
      id:"123",
      edad:24,
      fecha:"2018-10-10"
    },
    {
      nombre:"victor",
      id:"1236",
      edad:25,
      fecha:"2018-10-18"
    },
  ]
  constructor() { }

  getClientes():Cliente[]{
    return this.clientes;
  }
}
