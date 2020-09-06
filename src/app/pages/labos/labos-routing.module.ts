import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabosPage } from './labos.page';

const routes: Routes = [
  {
    path: '',
    component: LabosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabosPageRoutingModule {}
