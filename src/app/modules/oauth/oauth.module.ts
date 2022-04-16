import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './oauth.component';
import { RegisterComponent } from './views/register/register.component';
import { OauthRoutingModule } from './oauth-routing.component';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    OauthRoutingModule,
    CoreModule
  ]
})
export class OauthModule { }
