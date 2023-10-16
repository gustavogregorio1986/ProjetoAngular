import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { response } from 'express';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  title = 'Cadastro de Produtos';

  form !:FormGroup;

  dados = {
    NomeCliente: '',
    EmailCliente: '',
    Cpf:''
  };

  constructor(private fb : FormBuilder, private clienteService: ClienteService){
      this.form = this.fb.group({
          NomeCliente: new FormControl(''),
          EmailCliente: new FormControl(''),
          Cpf: new FormControl(''),
      });
  }

  salvar(dados: any){
      this.clienteService.cadastrar(dados).subscribe(
        response => {
            console.log('Dados Gravados com sucesso.', dados);
        }, error => {
          console.error('Erro ao salvar os dados', error);
        }
      )
  }
}
