import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuarioRoutes } from "./app.routes";
import { FacturaComponent } from './factura/factura.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { RegistroService } from "../services/registro.service";
@NgModule({
  declarations: [PerfilComponent, FacturaComponent],
  imports: [
    CommonModule,
    UsuarioRoutes,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RegistroService
  ],
})
export class UsuarioModule { }
