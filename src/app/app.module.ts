import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/logins/login/login.component';
import { AuthService } from './services/auth.service';
import { StatusComponent } from './components/status/status.component';
import { MainComponent } from './components/main/main.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuard} from './guards/auth.guard';

import { TaskService } from './services/task.service';
import { AdminloginComponent } from './components/logins/adminlogin/adminlogin.component';
import { StudentloginComponent } from './components/logins/studentlogin/studentlogin.component';
import { CounselorloginComponent } from './components/logins/counselorlogin/counselorlogin.component';
import { MentorloginComponent } from './components/logins/mentorlogin/mentorlogin.component';
import { ProfessorloginComponent } from './components/logins/professorlogin/professorlogin.component';
import { RegisterComponent } from './components/register/register.component';
import {AdminGuard} from './guards/admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StatusComponent,
    MainComponent,
    ScheduleComponent,
    LogoutComponent,
    AdminloginComponent,
    StudentloginComponent,
    CounselorloginComponent,
    MentorloginComponent,
    ProfessorloginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'adminlogin', component: AdminloginComponent },
      { path: 'studentlogin', component: StudentloginComponent },
      { path: 'counselorlogin', component: CounselorloginComponent },
      { path: 'mentorlogin', component: MentorloginComponent },
      { path: 'professorlogin', component: ProfessorloginComponent },
      { path: 'register', component: RegisterComponent, canActivate: [AdminGuard]},
      { path: 'status', component: StatusComponent},
      { path: 'schedule', component: ScheduleComponent, canActivate: [AuthGuard] },
      { path: 'main', component: MainComponent,  canActivate: [AuthGuard] },
      { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] }
    ])
  ],
  providers: [AuthService, TaskService, AuthGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
