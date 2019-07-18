import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente'
import { ApiClienteService } from '../service/api-cliente.service';
import { faEdit, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {
  faEdit = faEdit;
  faEye = faEye;
  clientes:Cliente[];

  constructor(public apiClienteService:ApiClienteService) { }

  getClientes(){
    this.apiClienteService.getClientes().subscribe(cliente => {this.clientes = cliente})
  }

  ngOnInit() {
    this.getClientes();
    console.log(this.clientes);
  }

  editar(cli:Cliente){
    cli.edit = !cli.edit;
  }

}
