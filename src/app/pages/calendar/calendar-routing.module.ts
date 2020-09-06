import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarPage } from './calendar.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarPage
  },
  {
    path: 'horaire',
    loadChildren: () => import('./horaire/horaire.module').then( m => m.HorairePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarPageRoutingModule {}
