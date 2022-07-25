import { Component, OnInit } from '@angular/core';
import { FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {FormControl} from "@angular/forms";
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { Clientes } from '../../cliente/clientes.model';
import { ClientesService } from '../../cliente/clientes.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {

  usuario: Clientes = {
    email: '',
    name: '',
    CPF: null,
    celular: null
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private productService: ClientesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  matcher = new MyErrorStateMatcher();

  createCliente(): void {
    this.productService.create(this.usuario).subscribe(() => {
      this.productService.showMessage("Usuario adicionado!")
      location.reload()
    })
  }

  deleteCliente(): void {
    this.productService.delete(this.usuario.name).subscribe(() => {
      this.productService.showMessage("Usuario Deletado!");
    })
  }

}