import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collares',
  templateUrl: './collares.component.html',
  styleUrls: ['./collares.component.css']
})
export class CollaresComponent implements OnInit {


  listaCollares=[{
    id:1,
    nombre: 'Collar luna y sol',
    precio: 1000,
    imagen:'imagen01.jpg',
    descripcion:'luna y sol, ideal para parejas',
    cantidad:100
},
{
    id:2,
    nombre:'Collar always w/you',
    precio:2000,
    imagen :'imagen02.jpg ',
    descripcion:'Collar que representa el amor ',
    cantidad:100
},
{
    id:3,
    nombre:'Collar de boda',
    precio:2200,
    imagen :'imagen03.jpg ',
    descripcion:'Para el matrmonio',
    cantidad:100
},
{
    id:4,
    nombre:'Collar de amor',
    precio:3200,
    imagen :'imagen04.jpg ',
    descripcion:'lleva el amor siempre contigo',
    cantidad:100
}

];


  constructor() { }

  ngOnInit(): void {
  }


  adicionarCarrito(id: any){

    console.log(id);
    localStorage.setItem("Collar", id);
    window.alert("Producto adicionado en el carrito");
  }


}
