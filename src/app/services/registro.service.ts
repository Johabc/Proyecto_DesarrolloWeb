import { Injectable } from '@angular/core';
import { Registro } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  public listaspersonasnuevas: Registro[] = [];

  constructor() { }

  public agregar(registro: Registro){
    this.listaspersonasnuevas.push(registro);
  }

  public obtener(){
    return this.listaspersonasnuevas;
  }
}
