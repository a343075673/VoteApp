import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { ItemService } from './services/item.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent
  ],
  imports: [
    RoutingModule,
    SharedModule
  ],
  providers: [
    AuthService,
    ItemService,
    UserService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
