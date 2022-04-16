import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { DashboardAdminComponent } from "./modules/admin/admin.component";

// auth views
import { LoginComponent } from "./modules/oauth/oauth.component";
//import { RegisterComponent } from "./views/auth/register/register.component";


import { ProfileComponent } from "./views/profile/profile.component";

const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: DashboardAdminComponent,
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  // auth views
  {
    path: "oauth",
    component: LoginComponent,
    loadChildren: () => import('./modules/oauth/oauth.module').then(m => m.OauthModule)
  },
  // no layout views
  { path: "profile", component: ProfileComponent },
  { path:"login", component: LoginComponent },
  { path: "", component: LoginComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
