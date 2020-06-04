import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuarioRoutes } from './app.routes';
import { FacturaComponent } from './factura/factura.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegistroService } from '../services/registro.service';
import { ProductosService } from '../services/productos.service';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductosComponent } from './productos/productos.component';
import { NuevafacturaComponent } from './nuevafactura/nuevafactura.component';
import { DatosService } from "../services/datos.service";
import { FacturaService } from "../services/factura.service";
@NgModule({
  declarations: [
    PerfilComponent,
    FacturaComponent,
    ClientesComponent,
    ProductosComponent,
    NuevafacturaComponent,
  ],
  imports: [CommonModule, UsuarioRoutes, HttpClientModule, FormsModule],
  providers: [RegistroService, ProductosService , DatosService , FacturaService],
})
export class UsuarioModule {}
