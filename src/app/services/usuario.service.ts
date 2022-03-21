import { Injectable } from '@angular/core';
import { Usuario } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public listaspersonas: Usuario[] = [];

  constructor() { }

  public agregar(usuario: Usuario){
    this.listaspersonas.push(usuario);
  }

  public obtener(){
    return this.listaspersonas;
  } //Se ve la info hasta que se recargue
}
