import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciosesPage } from './inicioses.page';

const routes: Routes = [
  {
    path: '',
    component: IniciosesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciosesPageRoutingModule {}
