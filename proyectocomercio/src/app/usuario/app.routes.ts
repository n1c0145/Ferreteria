import { NuevafacturaComponent } from './nuevafactura/nuevafactura.component';
import { ProductosComponent } from './productos/productos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FacturaComponent } from './factura/factura.component';
import { PerfilComponent } from './perfil/perfil.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const rutas: Routes = [
  {
    path: ':nombre/perfil',
    component: PerfilComponent,
  },
  {
    path: 'factura',
    component: FacturaComponent,
  },
  {
    path: 'clientes',
    component: ClientesComponent,
  },
  {
    path: 'productos',
    component: ProductosComponent,
  },
  {
    path: 'nuevafactura',
    component: NuevafacturaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  providers: [],
  exports: [RouterModule],
})
export class UsuarioRoutes {}
