import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfumes',
  templateUrl: './perfumes.component.html',
  styleUrls: ['./perfumes.component.css']
})
export class PerfumesComponent implements OnInit {


  listaPerfumes=[{
    id:1,
    nombre: 'Colonia prada',
    precio: 850000,
    imagen: 'imagen01.jpg',
    descripcion: 'Colonia para hombre marca prada',
    cantidad: 100
  },
  {
    id:2,
    nombre:'Colonia Sauvage by dior',
    precio:900000,
    imagen :'imagen02.jpg ',
    descripcion:'Colonia para hombre marca dior',
    cantidad:100
  },
  {
    id:3,
    nombre:'Perfume Versace',
    precio:1200000,
    imagen :'imagen03.jpg ',
    descripcion:'Perfume para mujer marca Versace',
    cantidad:100
  },
  {
    id:4,
    nombre:'Perfume Good Girl by Carolina Herrera',
    precio:2500000,
    imagen:'imagen04.jpg',
    descripcion: 'Perfume para mujer marca Carolina Herrera',
    cantidad: 100
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  adicionarCarrito(id: any){
    console.log(id);
    localStorage.setItem("Perfume", id);
    window.alert("Producto adicionado en el carrito");
  }
}
