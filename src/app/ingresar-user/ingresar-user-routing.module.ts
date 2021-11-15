import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresarUserPage } from './ingresar-user.page';

const routes: Routes = [
  {
    path: '',
    component: IngresarUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresarUserPageRoutingModule {}
