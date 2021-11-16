import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostearPageRoutingModule } from './postear-routing.module';

import { PostearPage } from './postear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostearPageRoutingModule
  ],
  declarations: [PostearPage]
})
export class PostearPageModule {}
