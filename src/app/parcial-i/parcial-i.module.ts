import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParcialIPageRoutingModule } from './parcial-i-routing.module';

import { ParcialIPage } from './parcial-i.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParcialIPageRoutingModule
  ],
  declarations: [ParcialIPage]
})
export class ParcialIPageModule {}
