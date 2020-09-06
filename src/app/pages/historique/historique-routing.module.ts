import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoriquePage } from './historique.page';

const routes: Routes = [
  {
    path: '',
    component: HistoriquePage
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoriquePageRoutingModule {}
