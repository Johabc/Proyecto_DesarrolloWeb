import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/models/persona.model';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  public registro: Registro = new Registro();

  constructor(public _registroService: RegistroService) { }

  ngOnInit(): void {
  }

  formSumbit(){
    debugger;
    this._registroService.agregar(this.registro);
    this.registro = new Registro();
    alert("Usuario"+ Registro.name + "creado correctamente");

  }

  guardar(){
    localStorage.setItem('usuario', this.registro.email)
  }
}
