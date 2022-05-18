import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pulseras',
  templateUrl: './pulseras.component.html',
  styleUrls: ['./pulseras.component.css']
})
export class PulserasComponent implements OnInit {

  listaPulseras=[{
    id:1,
    nombre: 'Pulsera as it was',
    precio: 85000,
    imagen: 'imagen01.jpg',
    descripcion: 'Pulsera de color negro con detalles plateados',
    cantidad: 100
  },
  {
    id:2,
    nombre:'Pulsera polos opuestos',
    precio:250000,
    imagen :'imagen02.jpg ',
    descripcion:'Pulseras de color negro y blanco para los polos opuestos',
    cantidad:100
  },
  {
    id:3,
    nombre:'Pulsera bff',
    precio:220000,
    imagen :'imagen03.jpg ',
    descripcion:'Pulseras con grabado en plateado y dorado que representa la amistad',
    cantidad:100
  },
  {
    id:4,
    nombre:'Pulsera en oro',
    precio:250000,
    imagen:'imagen04.jpg',
    descripcion: 'Pulsera en oro con perlas',
    cantidad: 100
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }


  adicionarCarrito(id: any){
    window.alert("Producto adicionado en el carrito");
  }

}
