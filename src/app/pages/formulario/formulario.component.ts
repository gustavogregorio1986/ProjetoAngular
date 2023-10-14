import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    nomeCliente: '',
    emailCliente: '',
    cpf:''
  };

  constructor(private fb : FormBuilder, private clienteService: ClienteService){
      this.form = this.fb.group({
          nomeCliente: new FormControl(''),
          emailCliente: new FormControl(''),
          cpf: new FormControl(''),
      });
  }

  salvar(){

    const dados = { title: 'cliente', body: 'cadastrar', userId: 1 };

      this.clienteService.cadastrar(dados).subscribe((data) => {
           console.log('Dados Gravados',data);
      },(error) => {
        console.error('Erro ao enviar dados:', error);
      });
  }
}
