import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { response } from 'express';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  title = 'Cadastro de Produtos';

  mensagem!: string;
  dados:any = {}
  form !:FormGroup;


  constructor(private fb : FormBuilder, private clienteService: ClienteService, private router: Router){
      this.form = this.fb.group({
          NomeCliente: new FormControl(''),
          EmailCliente: new FormControl(''),
          Cpf: new FormControl(''),
      });
  }

  salvar(dados: any){
      this.clienteService.cadastrar(dados).subscribe(
        response => {
          this.mensagem = 'Cliente salvos com sucesso!';
        }, error => {
          this.mensagem = 'Cliente n~]ao foi possivel salvar';
          console.error('Erro ao salvar os dados', error);
        }
      )
  }

  limparCampos(){
     this.dados = {};
  }

  goToConsultaPage() {
    this.router.navigate(['/consulta']);
  }
}
