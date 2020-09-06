import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMedicamenttPageRoutingModule } from './add-medicamentt-routing.module';

import { AddMedicamenttPage } from './add-medicamentt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMedicamenttPageRoutingModule
  ],
  declarations: [AddMedicamenttPage]
})
export class AddMedicamenttPageModule {}
