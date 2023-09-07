import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
//Agregué
import {MatButtonToggleModule} from '@angular/material/button-toggle';
//import {Router, NavigationExtras, RouterLinkWithHref} from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    //Agregué
    MatButtonToggleModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
