import { NgModule } from '@angular/core';
import { guardinho } from './guardinho.guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ruta-protegida',
    canActivate: [guardinho],
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'recuperar-con',
    loadChildren: () => import('./recuperar-con/recuperar-con.module').then( m => m.RecuperarConPageModule)
  },
  {
    path: 'inicioses',
    loadChildren: () => import('./inicioses/inicioses.module').then( m => m.IniciosesPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'reserva',
    loadChildren: () => import('./reserva/reserva.module').then( m => m.ReservaPageModule)
  },
  {
    path: 'rec-con',
    loadChildren: () => import('./rec-con/rec-con.module').then( m => m.RecConPageModule)
  },
  {
    path: 'perfconductor',
    loadChildren: () => import('./perfconductor/perfconductor.module').then( m => m.PerfconductorPageModule)
  },
  {
    path: 'conductor',
    loadChildren: () => import('./conductor/conductor.module').then( m=> m.ConductorPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
