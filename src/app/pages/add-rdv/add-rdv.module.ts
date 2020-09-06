import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRdvPageRoutingModule } from './add-rdv-routing.module';

import { AddRdvPage } from './add-rdv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRdvPageRoutingModule
  ],
  declarations: [AddRdvPage]
})
export class AddRdvPageModule {}
