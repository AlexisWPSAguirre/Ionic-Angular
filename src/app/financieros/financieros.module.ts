import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinancierosPageRoutingModule } from './financieros-routing.module';

import { FinancierosPage } from './financieros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinancierosPageRoutingModule
  ],
  declarations: [FinancierosPage]
})
export class FinancierosPageModule {}
