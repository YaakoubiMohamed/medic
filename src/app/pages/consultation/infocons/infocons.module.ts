import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoconsPageRoutingModule } from './infocons-routing.module';

import { InfoconsPage } from './infocons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoconsPageRoutingModule
  ],
  declarations: [InfoconsPage]
})
export class InfoconsPageModule {}
