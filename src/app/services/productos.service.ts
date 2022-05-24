import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private http: HttpClient) { }

  findAll(): Observable<Producto[]>{

    return this.http.get<Producto[]>("http://localhost:8080/productos");

  }

  delete(id: number): Observable<number> {

    return this.http.get<number>("http://localhost:8080/productos/delete" + id)

  }

  save(item: Producto): Observable<Producto>{

    return this.http.post<Producto>("http://localhost:8080/decoItem/save",item);
  }
}
