import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedecinPage } from './medecin.page';

const routes: Routes = [
  {
    path: '',
    component: MedecinPage
  },
  {
    path: 'profile-med',
    loadChildren: () => import('./profile-med/profile-med.module').then( m => m.ProfileMedPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedecinPageRoutingModule {}
