import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRdvPage } from './add-rdv.page';

const routes: Routes = [
  {
    path: '',
    component: AddRdvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRdvPageRoutingModule {}
