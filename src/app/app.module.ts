import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router'
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { StatusComponent } from './components/status/status.component';
import { EnsureAuthenticatedService } from './services/ensure-authenticated.service';
import { LoginRedirectService } from './services/login-redirect.service';
import { MainComponent } from './components/main/main.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StatusComponent,
    MainComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'status', component: StatusComponent },
      { path: 'schedule', component: ScheduleComponent },
      { path: 'main', component: MainComponent }
    ])
  ],
  providers: [AuthService,EnsureAuthenticatedService,
    LoginRedirectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
