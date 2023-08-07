import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AuthLayoutRoutingModule } from './layouts/auth-layout/auth-layout.routing.module';
import { SegurityLayoutRoutingModule } from './layouts/segurity-layout/segurity-layout.routing.module';
import { AdminLayoutRoutingModule } from './layouts/admin-layout/admin-layout.routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/segurity',
    pathMatch: 'full',
    // loadChildren: () => import('./layouts/segurity-layout/segurity-layout.module').then( m => m.SegurityLayoutModule )
  },

  // {
  //   path: 'segurity',
  //   loadChildren: () => import('./layouts/segurity-layout/segurity-layout.module').then( m => m.SegurityLayoutModule )
  // },
  // {
  //   path: 'auth',
  //   component: AuthLayoutComponent,
  //   loadChildren: () => import('./layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
  // },

  { path: '**', component: NotFoundPageComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthLayoutRoutingModule,
    SegurityLayoutRoutingModule,
    AdminLayoutRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
