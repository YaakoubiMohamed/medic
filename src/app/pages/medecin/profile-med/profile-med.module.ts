import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileMedPageRoutingModule } from './profile-med-routing.module';

import { ProfileMedPage } from './profile-med.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileMedPageRoutingModule
  ],
  declarations: [ProfileMedPage]
})
export class ProfileMedPageModule {}
