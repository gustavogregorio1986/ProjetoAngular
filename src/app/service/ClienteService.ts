import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }



  cadastrar(dados: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post('https://localhost:44338/api/cliente/Cadastrar', dados, { headers });
  }

  getClientList(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:44338/api/cliente/ListarClientes');
  }

}
