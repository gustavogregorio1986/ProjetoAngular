import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  title = 'Cadastro de Produtos';

  form !:FormGroup;

  constructor(private fb : FormBuilder){
      this.form = this.fb.group({
          nomeCliente: new FormControl(''),
          emailCliente: new FormControl(''),
          cpf: new FormControl(''),
      });
  }
}
