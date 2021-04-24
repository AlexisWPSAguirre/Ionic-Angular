import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinancierosPage } from './financieros.page';

const routes: Routes = [
  {
    path: '',
    component: FinancierosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancierosPageRoutingModule {}
