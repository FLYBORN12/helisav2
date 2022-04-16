import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";


// admin views
import { AdminModule } from "./modules/admin/admin.module";


// auth views
import { OauthModule } from "./modules/oauth/oauth.module";

// no layouts views
import { ProfileComponent } from "./views/profile/profile.component";

// components for views and layouts
import { CardProfileComponent } from "./shared/components/cards/card-profile/card-profile.component";
import { CardSettingsComponent } from "./shared/components/cards/card-settings/card-settings.component";
import { MapExampleComponent } from "./shared/components/maps/map-example/map-example.component";
import { TableDropdownComponent } from "./shared/components/dropdowns/table-dropdown/table-dropdown.component";
import { PagesDropdownComponent } from "./shared/components/dropdowns/pages-dropdown/pages-dropdown.component";
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
    PagesDropdownComponent,
    TableDropdownComponent,
    CardProfileComponent,
    CardSettingsComponent,
    ProfileComponent,
    MapExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    CoreModule,
    OauthModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
