import { ProductosService } from './../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from '../../modelos/productos.interface';
import { DatosService } from '../../services/datos.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  productos: Productos[];
  editOn = false;
  selectedProducto: Productos;


  nombre = '';
  precio = '';
  detalle = '';
  imagen = '';
  id = '';
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private _productosService: ProductosService,
    private _service: DatosService
  ) {}

  ngOnInit(): void {
  
    this._productosService
      .metodoGet()
      .subscribe((data) => (this.productos = data));
  }

  onSelectectCity(cliente: Productos) {
    this.selectedProducto = cliente;
  }

  toggleEditOn() {
    if (this.editOn) {
      this.editOn = false;
    } else {
      this.editOn = true;
    }
  }

  actualizar(micliente: Productos) {
    this._productosService.metodoPut(micliente).subscribe((cliente) => {
      this.toggleEditOn();
    });
  }
  onSelectCliente(nombre: Productos) {
    this.selectedProducto = nombre;
  }

  eliminar(cliente: Productos) {
    this._productosService.metodoDelete(cliente.id).subscribe();
    this.productos = this.productos.filter((c) => c.id != cliente.id);
    console.log(this.productos);
  }
  registrase() {
    this._productosService
      .metodoPost('http://localhost:1337/productos', {
        nombre: this.nombre,
        precio: this.precio,
        detalle: this.detalle,
        imagen: this.imagen,
      })
      .subscribe((resultadoPost) => {
        alert('producto registrado');
      });
  }
}
