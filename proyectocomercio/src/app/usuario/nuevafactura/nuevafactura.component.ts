import { Factura } from '../../modelos/factura.interface';
import { FacturaService } from '../../services/factura.service';
import { RegistroService } from './../../services/registro.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clientes } from '../../modelos/clientes.interface';
import { DatosService } from '.././../services/datos.service';
import * as html2pdf from 'html2pdf.js'
@Component({
  selector: 'app-nuevafactura',
  templateUrl: './nuevafactura.component.html',
  styleUrls: ['./nuevafactura.component.css'],
})
export class NuevafacturaComponent implements OnInit {
  public arrayDesdeService:any;
  public arrayDesdeService2:any;
  clientes: Clientes[];
  factura: Factura[];
  editOn = false;
  selectedCliente: Clientes;
  cedula = '';
  nombre = '';
  apellido = '';
  correo = '';
  direccion = '';
  telefono = '';
  id = '';
  fecha = new Date();
  subtotal = '';
  totalng = '';
  total=0;
  iva=0 ;
  suma=0;
 
   sumacondecimal:any;
   totalcondecimal:any;

  constructor(
    private _service: DatosService,
    private readonly _activatedRoute: ActivatedRoute,
    private _registroService: RegistroService,
    private _facturaService: FacturaService
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
      this.sumacondecimal = this.suma.toFixed(2);
      this.iva= this.suma * 0.12;   
      this.total = this.suma + this.iva;
  this.totalcondecimal=this.total.toFixed(2)
  console.log(this.totalcondecimal);
  
    }
   
 
  }
  guardar() {
    this._facturaService
      .metodoPost('http://localhost:1337/factura', {
        cedula: this.selectedCliente.cedula,
        nombre: this.selectedCliente.nombre,
        apellido: this.selectedCliente.apellido,
        correo: this.selectedCliente.correo,
        direccion: this.selectedCliente.direccion,
        telefono: this.selectedCliente.telefono,
        fecha: this.fecha,
        subtotal: this.subtotal,
        total: this.totalng,
      })
      .subscribe((resultadoPost) => {
        alert('factura guardada');
      });
  }

exportar(){
  const options = {
    filename: 'factura.pdf',
    image: {type: 'jpeg'},
    html2canvas: {},
    jsPDF: {  orientation: 'landscape'}
  };
  const content: Element = document.getElementById('elemetoexportar');
  html2pdf().from(content).set(options).save();

}


}
