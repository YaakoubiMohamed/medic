import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabPageModule } from './tab/tab.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'labo-map',
    pathMatch: 'full'
  },
  { 
    path: 'intro', 
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  }
  ,
  {
    path: 'menu-list',
    loadChildren: () => import('./pages/menu-list/menu-list.module').then( m => m.MenuListPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'medecin',
    loadChildren: () => import('./pages/medecin/medecin.module').then( m => m.MedecinPageModule)
  },
  {
    path: 'specialite',
    loadChildren: () => import('./pages/specialite/specialite.module').then( m => m.SpecialitePageModule)
  },
  {
    path: 'ville',
    loadChildren: () => import('./pages/ville/ville.module').then( m => m.VillePageModule)
  },
  {
    path: 'add-rdv',
    loadChildren: () => import('./pages/add-rdv/add-rdv.module').then( m => m.AddRdvPageModule)
  },
  {
    path: 'profile-med',
    loadChildren: () => import('./pages/medecin/profile-med/profile-med.module').then( m => m.ProfileMedPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'horaire',
    loadChildren: () => import('./pages/calendar/horaire/horaire.module').then( m => m.HorairePageModule)
  },
  {
    path: 'historique',
    loadChildren: () => import('./pages/historique/historique.module').then( m => m.HistoriquePageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/historique/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'infocons',
    loadChildren: () => import('./pages/consultation/infocons/infocons.module').then( m => m.InfoconsPageModule)
  },
  {
    path: 'consultation',
    loadChildren: () => import('./pages/consultation/consultation.module').then( m => m.ConsultationPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'compte',
    loadChildren: () => import('./pages/compte/compte.module').then( m => m.ComptePageModule)
  },
  {
    path: 'pharmacies',
    loadChildren: () => import('./pages/pharmacies/pharmacies.module').then( m => m.PharmaciesPageModule)
  },
  {
    path: 'labos',
    loadChildren: () => import('./pages/labos/labos.module').then( m => m.LabosPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'labo-map',
    loadChildren: () => import('./pages/labo-map/labo-map.module').then( m => m.LaboMapPageModule)
  },
  {
    path: 'medicaments',
    loadChildren: () => import('./pages/medicaments/medicaments.module').then( m => m.MedicamentsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
