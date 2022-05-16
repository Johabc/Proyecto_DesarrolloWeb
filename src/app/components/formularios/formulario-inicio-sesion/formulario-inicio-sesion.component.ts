import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/persona.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-formulario-inicio-sesion',
  templateUrl: './formulario-inicio-sesion.component.html',
  styleUrls: ['./formulario-inicio-sesion.component.css']
})
export class FormularioInicioSesionComponent implements OnInit {
  login: any = FormGroup;


  constructor(private fb:FormBuilder){

  }
  ngOnInit(): void {
    this.login = this.fb.group({
      correo:['', Validators.compose([Validators.required, Validators.email])],
      contra:['', Validators.required]
    })
  }

  loginSubmit(data:any){
    console.log(data);
  }

}
