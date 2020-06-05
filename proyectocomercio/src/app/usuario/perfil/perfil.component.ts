import { ProductosService } from './../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from '../../modelos/productos.interface';
import { DatosService } from '../../services/datos.service';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  productos: Productos[];
  public arregloProducto: Array<any> = [];
  public arregloPrecio: Array<any> = [];
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private _productosService: ProductosService,
    private _service: DatosService
    
  ) {}

  ngOnInit(): void {
    this.arregloProducto;
    this.arregloPrecio;
    this.sendArray(this.arregloProducto);
    this.sendArray2(this.arregloPrecio);

    this._productosService
    .metodoGet()
    .subscribe((data) => (this.productos = data));

  }
  comprar(cliente: Productos) {
    console.log(cliente.precio);
    console.log(cliente.nombre);
    this.arregloProducto.push(cliente.nombre);
    this.arregloPrecio.push(cliente.precio);
    console.log(this.arregloProducto);
    console.log(this.arregloPrecio);
    alert('Producto Comprado')
  }
  sendArray(arregloProducto) {
    this._service.setArray(arregloProducto);
  }
  sendArray2(arregloPrecio) {
    this._service.setArray2(arregloPrecio);
  }
}
