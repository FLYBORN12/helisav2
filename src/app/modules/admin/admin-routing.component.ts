import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DashboardAdminComponent } from './admin.component'
import { HelpDeskComponent } from './views/help-desk/help-desk.component'

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardAdminComponent
    },
    {
        path: 'helpdesk',
        component: HelpDeskComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule {

}