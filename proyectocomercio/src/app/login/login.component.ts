import { element } from 'protractor';
import { Usuario } from './../modelos/usuario.interface';
import { RegistroService } from '../services/registro.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuarios: Usuario[];

  contraseniamodel = '';
  usuariomodel = '';
  constructor(
    private readonly _router: Router,
    private _registroService: RegistroService
  ) {}

  ngOnInit(): void {
    this._registroService
      .metodoGetUsuario()
      .subscribe((data) => (this.usuarios = data));
  }

  ingresar() {

    
     var found = -1;
     for (var i = 0; i < this.usuarios.length; i++) {
       if (this.usuarios[i].usuario == this.usuariomodel) {
         found = i;
         break;
       }
     }

     var found2 = -1;
     for (var i = 0; i < this.usuarios.length; i++) {
       if (this.usuarios[i].contrasenia == this.contraseniamodel) {
         found2 = i;
         break;
       }
     }

     console.log(found , found2);
  
if(found !== -1 && found2 !== -1){
alert('Bienvenido '+this.usuariomodel)
this._router.navigate(['/usuario','user','perfil']);
}
if(found === -1 && found2 !== -1){
  alert('Usuario Incorrecto')
  }
  if(found !== -1 && found2 === -1){
    alert('Contraseña Incorrecta')
    }
    if(found === -1 && found2 === -1){
      alert('Usuario y Contraseña Incorrecto')
      }
}

    }
  

