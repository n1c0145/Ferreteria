
import { FacturaService } from '../../services/factura.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Factura } from '../../modelos/factura.interface';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  clientes: Factura[];
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private _registroService: FacturaService
  ) { }

  ngOnInit(): void {
    this._registroService
    .metodoGet()
    .subscribe((data) => (this.clientes = data));

  }

}
