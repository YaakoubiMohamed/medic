import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicamentsPage } from './medicaments.page';

const routes: Routes = [
  {
    path: '',
    component: MedicamentsPage
  },
  {
    path: 'add-medicamentt',
    loadChildren: () => import('./add-medicamentt/add-medicamentt.module').then( m => m.AddMedicamenttPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicamentsPageRoutingModule {}
