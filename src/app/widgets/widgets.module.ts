import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListNotifyWidgetComponent } from './list-notify-widget/list-notify-widget.component';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';


@NgModule({
  declarations: [
    ListNotifyWidgetComponent
  ],
  imports: [
    CommonModule,
    NgbDropdownModule,
    NgbNavModule,
    SimplebarAngularModule,
  ],
  exports: [
    ListNotifyWidgetComponent
  ]
})
export class WidgetsModule { }
