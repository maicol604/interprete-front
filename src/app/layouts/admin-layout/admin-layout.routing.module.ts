import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from './admin-layout.component';



const routes: Routes = [
  {
    path: 'dashboard',
    component: AdminLayoutComponent,
    loadChildren: () => import('./admin-layout.routes.module').then( (m) => m.AdminLayoutRoutesModule )
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule {}
