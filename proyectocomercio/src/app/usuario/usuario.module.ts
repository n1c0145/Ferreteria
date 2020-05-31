import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuarioRoutes } from "./app.routes";
import { FacturaComponent } from './factura/factura.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [PerfilComponent, FacturaComponent],
  imports: [
    CommonModule,
    UsuarioRoutes,
    HttpClientModule,
    FormsModule
  ]
})
export class UsuarioModule { }
