import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaboMapPage } from './labo-map.page';

const routes: Routes = [
  {
    path: '',
    component: LaboMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaboMapPageRoutingModule {}
