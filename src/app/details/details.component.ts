import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiClienteService } from '../service/api-cliente.service';
import { Cliente } from '../model/cliente'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  cliente;
  constructor(
    private route: ActivatedRoute,
    private apiClienteService:ApiClienteService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getCliente(params.get('Id'));
    });
  }

  getCliente(id) : void {
    this.apiClienteService.getClientes().toPromise().then((res:Cliente[]) => {
      res.forEach((cli:Cliente)=>{
        if (cli.id = id)
          this.cliente = cli;
      });
    });
  }

}