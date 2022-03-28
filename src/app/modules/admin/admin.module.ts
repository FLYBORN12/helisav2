import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// views
import { DashboardAdminComponent } from './admin.component';
import { HelpDeskComponent } from './views/help-desk/help-desk.component'

// routing
import { AdminRoutingModule } from './admin-routing.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardAdminComponent,
    HelpDeskComponent
  ],
  exports:[
    DashboardAdminComponent,
    HelpDeskComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
