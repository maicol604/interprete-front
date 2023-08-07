import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SegurityLayoutComponent } from './segurity-layout.component';

const routes: Routes = [
  {
    path: 'segurity',
    component: SegurityLayoutComponent,
    loadChildren: () => import('./segurity-layout.routes.module').then( (m) => m.SegurityChildRoutingModule )
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SegurityLayoutRoutingModule {}
