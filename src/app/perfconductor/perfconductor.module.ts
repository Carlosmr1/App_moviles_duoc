import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfconductorPageRoutingModule } from './perfconductor-routing.module';

import { PerfconductorPage } from './perfconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfconductorPageRoutingModule
  ],
  declarations: [PerfconductorPage]
})
export class PerfconductorPageModule {}
