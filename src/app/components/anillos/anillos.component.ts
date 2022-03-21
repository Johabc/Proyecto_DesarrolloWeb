import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-anillos',
  templateUrl: './anillos.component.html',
  styleUrls: ['./anillos.component.css']
})
export class AnillosComponent implements OnInit {
 

  listaAnillos=[{
        id:1,
        nombre: 'Anillo luna y sol',
        precio: 1000,
        imagen:'imagen01.jpg',
        descripcion:'luna y sol, ideal para parjeas',
        cantidad:100
    },
    {
        id:2,
        nombre:'Anillo always w/you',
        precio:2000,
        imagen :'imagen02.jpg ',
        descripcion:'Anillo que representa el amor ',
        cantidad:100
    },
    {
        id:3,
        nombre:'Anillos de boda',
        precio:2200,
        imagen :'imagen03.jpg ',
        descripcion:'Para el matrmonio',
        cantidad:100
    },
    {
        id:4,
        nombre:'Anillo de amor',
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
    window.alert("Producto adicionado en el carrito");
  }


}
