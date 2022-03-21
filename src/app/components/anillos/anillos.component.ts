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
        descripcion:'descripcion',
        cantidad:100
    },
    {
        id:2,
        nombre:'Anillo always w/you',
        precio:1000,
        imagen :' ',
        descripcion:'descripcion',
        cantidad:100
    },
    {
        i:3,
        nombre:'Anillos de boda',
        precio:1000,
        imagen :' ',
        descripcion:'descripcion',
        cantidad:100
    },
    {
        i:4,
        nombre:'Anillo luna y sol',
        precio:1000,
        imagen :' ',
        descripcion:'descripcion',
        cantidad:100
    },
    {
        i:5,
        nombre:'Anillo luna y sol',
        precio:1000,
        imagen :' ',
        descripcion:'descripcion',
        cantidad:100
    },
    {
        i:6,
        nombre:'Anillo luna y sol',
        precio:1000,
        imagen :' ',
        descripcion:'descripcion',
        cantidad:100
    },
    {
        i:7,
        nombre:'Anillo luna y sol',
        precio:1000,
        imagen :' ',
        descripcion:'descripcion',
        cantidad:100
    }

  ];
  constructor() { }

  ngOnInit(): void {
   
  }


}
