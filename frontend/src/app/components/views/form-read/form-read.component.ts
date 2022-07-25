import { ClientesService } from './../../cliente/clientes.service';
import { Clientes } from './../../cliente/clientes.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormUpdateComponent } from '../form-update/form-update.component';

@Component({
  selector: 'app-form-read',
  templateUrl: './form-read.component.html',
  styleUrls: ['./form-read.component.css']
})
export class FormReadComponent implements OnInit {

  usuario!: Clientes[];
  displayedColumns = ['icon', 'name', 'email', 'edit']

  constructor(private clientesService: ClientesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.clientesService.read().subscribe(usuario => {
      this.usuario = usuario
      console.log(usuario)
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(FormUpdateComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
}
