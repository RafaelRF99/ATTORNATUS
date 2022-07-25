import { Clientes } from './clientes.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  baseUrl = "http://localhost:3001/usuario"

  constructor(private snackBar: MatSnackBar, private http: HttpClient ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(usuario: Clientes): Observable<Clientes> {
    return this.http.post<Clientes>(this.baseUrl, usuario)
  }

  read(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(this.baseUrl)
  }

  delete(name: string): Observable<Clientes> {
    const url = `${this.baseUrl}/${name}`;
    return this.http.delete<Clientes>(url);
  }

}