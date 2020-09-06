import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoconsPage } from './infocons.page';

const routes: Routes = [
  {
    path: '',
    component: InfoconsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoconsPageRoutingModule {}
