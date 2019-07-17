import { Component } from '@angular/core';
import { Cliente } from './model/cliente'
import { ApiClienteService } from './service/api-cliente.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clientes:Cliente[];
  title = 'app-clientes';
  constructor(public apiClienteService:ApiClienteService){
  }

  getClientes(){
    this.clientes = this.apiClienteService.getClientes()
  }

  ngOnInit() {
    this.getClientes();
    console.log(this.clientes);
  }
}
