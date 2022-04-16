import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// views
import { DashboardAdminComponent } from './admin.component';
import { HelpDeskComponent } from './views/help-desk/help-desk.component'

//views from shared
import { CardTableComponent } from "../../shared/components/cards/card-table/card-table.component";
import { CardBarChartComponent } from "../../shared/components/cards/card-bar-chart/card-bar-chart.component";
import { CardLineChartComponent } from "../../shared/components/cards/card-line-chart/card-line-chart.component";
import { CardPageVisitsComponent } from "../../shared/components/cards/card-page-visits/card-page-visits.component";
import { CardSocialTrafficComponent } from "../../shared/components/cards/card-social-traffic/card-social-traffic.component";
import { HeaderStatsComponent } from '../../shared/components/headers/header-stats/header-stats.component'
import { CardStatsComponent } from '../../shared/components/cards/card-stats/card-stats.component';



// routing
import { AdminRoutingModule } from './admin-routing.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    DashboardAdminComponent,
    HelpDeskComponent,
    CardTableComponent,
    CardBarChartComponent,
    CardLineChartComponent,
    CardPageVisitsComponent,
    CardSocialTrafficComponent,
    HeaderStatsComponent,
    CardStatsComponent,
  ],
  exports:[
    DashboardAdminComponent,
    HelpDeskComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule
  ]
})
export class AdminModule { }
