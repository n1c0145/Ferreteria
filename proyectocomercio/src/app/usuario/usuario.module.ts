import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuarioRoutes } from "./app.routes";
import { FacturaComponent } from './factura/factura.component';


@NgModule({
  declarations: [PerfilComponent, FacturaComponent],
  imports: [
    CommonModule,
    UsuarioRoutes
  ]
})
export class UsuarioModule { }
