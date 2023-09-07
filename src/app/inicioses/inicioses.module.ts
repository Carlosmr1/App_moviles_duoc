import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciosesPageRoutingModule } from './inicioses-routing.module';

import { IniciosesPage } from './inicioses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciosesPageRoutingModule
  ],
  declarations: [IniciosesPage]
})
export class IniciosesPageModule {}
