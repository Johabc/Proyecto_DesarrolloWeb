import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-pulseras',
  templateUrl: './pulseras.component.html',
  styleUrls: ['./pulseras.component.css']
})
export class PulserasComponent implements OnInit {

  listaPulseras : Producto [] = [];

  constructor(private productosService : ProductosService) { }

  ngOnInit(): void {
    this.productosService.findAll().subscribe(productos => (
     productos.forEach(item => {
      if (item.tipo == "pulseras"){
        this.listaPulseras.push(item);
      }}
     )))

  }


  adicionarCarrito(id: any){
    console.log(id);
    localStorage.setItem("Pulsera", id);
    window.alert("Producto adicionado en el carrito");
  }

}
