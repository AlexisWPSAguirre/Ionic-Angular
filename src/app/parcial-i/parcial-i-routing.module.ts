import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParcialIPage } from './parcial-i.page';

const routes: Routes = [
  {
    path: '',
    component: ParcialIPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParcialIPageRoutingModule {}
