import { RegistroService } from './../services/registro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
usuario =''
contrasenia = ''
cedula =''
nombre = ''
apellido = ''
correo = ''
direccion = ''
telefono = ''
id=''
constructor(
  private readonly _router: Router,
  private readonly _registroService: RegistroService
) {}

  ngOnInit(): void {
  }
  registrase(){
this._registroService.metodoPost(
  'http://localhost:1337/cliente',
  {
    usuario :this.usuario,
    contrasenia :this.contrasenia,
    cedula :this.cedula,
    nombre :this.nombre,
    apellido :this.apellido,
    correo :this.correo,
    direccion :this.direccion,
    telefono :this.telefono,
  }
).subscribe((resultadoPost)=>{
  alert('usuario registrado')

})
  }
}
