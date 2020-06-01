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
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  providers: [],
  exports: [RouterModule],
})
export class UsuarioRoutes {}
