import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresarUserPageRoutingModule } from './ingresar-user-routing.module';

import { IngresarUserPage } from './ingresar-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresarUserPageRoutingModule
  ],
  declarations: [IngresarUserPage]
})
export class IngresarUserPageModule {}
