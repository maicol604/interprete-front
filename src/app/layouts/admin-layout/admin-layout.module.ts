import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedLayoutModule } from '../shared/shared-layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { AdminLayoutRoutingModule } from './admin-layout.routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    SharedLayoutModule,
    ReactiveFormsModule,
    FeatherModule.pick(allIcons),
    AdminLayoutRoutingModule,

    RouterModule
  ]
})
export class AdminLayoutModule { }
