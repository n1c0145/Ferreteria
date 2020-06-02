import { RegistroService } from './../../services/registro.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clientes } from '../../modelos/clientes.interface';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  clientes: Clientes[];
  editOn = false;
  selectedCliente: Clientes;
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private _registroService: RegistroService
  ) {}

  ngOnInit(): void {
    this._registroService
      .metodoGet()
      .subscribe((data) => (this.clientes = data));
  }

  onSelectectCity(cliente:Clientes)
  {
    this.selectedCliente = cliente
  }

  toggleEditOn(){

      if (this.editOn) {
        this.editOn = false;
      } else {
        this.editOn = true;
      }
    }
    
  

  actualizar(micliente: Clientes) {
    this._registroService.metodoPut(micliente).subscribe((cliente) => {
      this.toggleEditOn();

    });
  }
  onSelectCliente(nombre: Clientes) {
    this.selectedCliente = nombre;
  }

  eliminar(cliente: Clientes) {
    // console.log('delete', cliente);
    this._registroService.metodoDelete(cliente.id).subscribe();
    this.clientes = this.clientes.filter((c) => c.id != cliente.id);
 
  }
}
