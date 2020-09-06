import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaboMapPageRoutingModule } from './labo-map-routing.module';

import { LaboMapPage } from './labo-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaboMapPageRoutingModule
  ],
  declarations: [LaboMapPage]
})
export class LaboMapPageModule {}
