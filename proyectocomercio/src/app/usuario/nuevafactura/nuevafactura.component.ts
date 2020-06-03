import { RegistroService } from './../../services/registro.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clientes } from '../../modelos/clientes.interface';
import { DatosService } from '.././../services/datos.service';
@Component({
  selector: 'app-nuevafactura',
  templateUrl: './nuevafactura.component.html',
  styleUrls: ['./nuevafactura.component.css'],
})
export class NuevafacturaComponent implements OnInit {
  public arrayDesdeService: Array<any>;
  public arrayDesdeService2: Array<any>;
  clientes: Clientes[];
  editOn = false;
  selectedCliente: Clientes;
  cedula = '';
  nombre = '';
  apellido = '';
  correo = '';
  direccion = '';
  telefono = '';
  id = '';
  fecha = '';
  subtotal = '';
  total = 0;
  iva = 0;
  suma = 0;
  ivam = 0;
  constructor(
    private _service: DatosService,
    private readonly _activatedRoute: ActivatedRoute,
    private _registroService: RegistroService
  ) {}

  ngOnInit(): void {
    this.arrayDesdeService = this._service.getArray();
    this.arrayDesdeService2 = this._service.getArray2();
    console.log(this.arrayDesdeService2);
    this._registroService
      .metodoGet()
      .subscribe((data) => (this.clientes = data));
  }
  onSelectectCity(cliente: Clientes) {
    this.selectedCliente = cliente;
  }

  toggleEditOn() {
    if (this.editOn) {
      this.editOn = false;
    } else {
      this.editOn = true;
    }
  }

  calcular() {
    for (var i = 0; i < this.arrayDesdeService2.length; i++) {
      console.log(this.arrayDesdeService2[i]);
      this.suma += this.arrayDesdeService2[i];
    }
    this.iva = this.suma * 0.12;
    this.total = this.suma + this.iva;
  
    
  }
}
