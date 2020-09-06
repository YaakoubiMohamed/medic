import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabosPageRoutingModule } from './labos-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { LabosPage } from './labos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule, 
    IonicModule, 
    LabosPageRoutingModule
  ],
  declarations: [LabosPage]
})
export class LabosPageModule {}
