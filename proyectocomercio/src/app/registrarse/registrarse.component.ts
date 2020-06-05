import { Usuario } from './../modelos/usuario.interface';
import { RegistroService } from '../services/registro.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css'],
})
export class RegistrarseComponent implements OnInit {
  contrasenia = '';
  usuario = '';
  id = '';
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private _registroService: RegistroService,
    
  ) {}

  ngOnInit(): void {}

  registrase() {
    this._registroService
      .metodoPost('http://localhost:1337/usuario', {
        usuario: this.usuario,
        contrasenia: this.contrasenia,
      })
      .subscribe((resultadoPost) => {
        alert('usuario registrado');
      });
  }

  
}
