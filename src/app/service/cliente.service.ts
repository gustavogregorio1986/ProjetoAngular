import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {




  constructor(private http: HttpClient) { }

  cadastrar(dados: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post('https://localhost:44338//api/cliente/Cadastrar', dados, { headers });
  }


}
