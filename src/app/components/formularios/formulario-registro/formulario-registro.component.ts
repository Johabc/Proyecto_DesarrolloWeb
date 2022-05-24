import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Registro, Usuario } from 'src/app/models/persona.model';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  register: any = FormGroup;


  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.register = this.fb.group ({
      nombre:['', Validators.required],
      apellidos:['', Validators.required],
      correo:['', Validators.compose([Validators.required, Validators.email])],
      contra:['', Validators.required]
    })
  }

  registerSubmit(data:string){
    console.log(data);
  localStorage.setItem("usuario", data);
  alert("Usuario agregado correctamente");
  }
}


