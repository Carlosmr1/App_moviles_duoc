import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfconductorPage } from './perfconductor.page';

const routes: Routes = [
  {
    path: '',
    component: PerfconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfconductorPageRoutingModule {}
