import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit{

  clientes: any[] = [];

  constructor(private clienteService: ClienteService){ }

  ngOnInit() {
      this.getListaClientes();
  }

  getListaClientes(){
      this.clienteService.getClientes().subscribe(clientes => {
          this.clientes = clientes
       });
  }

}
