import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileMedPage } from './profile-med.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileMedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileMedPageRoutingModule {}
