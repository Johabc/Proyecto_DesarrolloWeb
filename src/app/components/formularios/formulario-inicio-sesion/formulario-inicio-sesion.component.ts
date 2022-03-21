import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/persona.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-formulario-inicio-sesion',
  templateUrl: './formulario-inicio-sesion.component.html',
  styleUrls: ['./formulario-inicio-sesion.component.css']
})
export class FormularioInicioSesionComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  constructor(public _usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  formSumbit(){
    debugger;
    this._usuarioService.agregar(this.usuario);
    this.usuario = new Usuario();
    alert("Usuario agregado correctamente");

  }
}
