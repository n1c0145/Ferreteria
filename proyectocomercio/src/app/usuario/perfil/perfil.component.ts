import { RegistroService } from './../../services/registro.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _registroService: RegistroService
    ) {} 

  ngOnInit(): void {
    this._activatedRoute
    .params
    .subscribe((resultadoParametros) => {
      console.log(resultadoParametros);
    });

    this._registroService
    .metodoGet('http://localhost:1337/cliente')
    .subscribe((resultadoMetodoGet) => {
      console.log('respuesta del get');
      console.log(resultadoMetodoGet);
    });
   
  }




}
