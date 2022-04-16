import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components Principal
import { FooterComponent } from './footers/footer/footer.component';
import { FooterAdminComponent } from './footers/footer-admin/footer-admin.component';
import { FooterSmallComponent } from './footers/footer-small/footer-small.component';
import { AuthNavbarComponent } from './navbars/auth-navbar/auth-navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminRoutingModule } from '../modules/admin/admin-routing.component';
import { DashboardNavbarComponent } from './navbars/dashboard-navbar/dashboard-navbar.component'

import { OauthRoutingModule } from '../modules/oauth/oauth-routing.component';



@NgModule({
  declarations: [
    FooterComponent,
    FooterAdminComponent,
    FooterSmallComponent,
    AuthNavbarComponent,
    DashboardNavbarComponent,
    SidebarComponent,
  ],
  exports:[
    FooterComponent,
    FooterAdminComponent,
    FooterSmallComponent,
    AuthNavbarComponent,
    DashboardNavbarComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    OauthRoutingModule
  ]
})
export class CoreModule { }
