import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedLayoutModule } from '../shared/shared-layout.module';
import { TranslateModule } from '@ngx-translate/core';
import { SegurityLayoutComponent } from './segurity-layout.component';
import { SegurityLayoutRoutingModule } from './segurity-layout.routing.module';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';

import { SwiperModule } from 'swiper/angular';
import { NgbNavModule, NgbDropdownModule, NgbAccordionModule, NgbTooltipModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfilePageComponent } from './profile-page/profile-page.component';

import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';

// Load Icon
import { defineElement } from 'lord-icon-element';
// import lottie from 'lottie-web';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SegurityLayoutComponent,
    UserComponent,
    RoleComponent,
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    SharedLayoutModule,
    ReactiveFormsModule,
    SwiperModule,
    TranslateModule,
    SegurityLayoutRoutingModule,

    NgbNavModule,
    NgbDropdownModule,
    NgbAccordionModule,
    NgbTooltipModule,
    NgbPaginationModule,
    FeatherModule.pick(allIcons),

    RouterModule
  ],
})
export class SegurityLayoutModule {

  constructor() {
    // defineElement(lottie.loadAnimation);
  }


}
