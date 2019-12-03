import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)},
  { path: 'ahorrar', loadChildren: () => import('./pages/ahorrar/ahorrar.module').then( m => m.AhorrarPageModule)},
  { path: 'pricipal', loadChildren: () => import('./pages/pricipal/pricipal.module').then( m => m.PricipalPageModule)},
  { path: 'retirar', loadChildren: () => import('./pages/retirar/retirar.module').then( m => m.RetirarPageModule)},
  { path: 'transferir', loadChildren: () => import('./pages/transferir/transferir.module').then( m => m.TransferirPageModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
