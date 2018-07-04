import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/logins/login/login.component';
import { AuthService } from './services/auth.service';
import { StatusComponent } from './components/status/status.component';
import { MainComponent } from './components/mains/main/main.component';
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
import { StudentGuard } from './guards/student.guard';
import { AdvisorloginComponent } from './components/logins/advisorlogin/advisorlogin.component';
import { CounselormainComponent } from './components/mains/counselormain/counselormain.component';
import { AdminmainComponent } from './components/mains/adminmain/adminmain.component';
import {StudentService} from './services/student.service';

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
    RegisterComponent,
    AdvisorloginComponent,
    CounselormainComponent,
    AdminmainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      // This part are the login's. They don't use guard. (The guard of the login is practically the code in flask.)
      { path: 'login', component: LoginComponent },
      { path: 'adminlogin', component: AdminloginComponent },
      { path: 'studentlogin', component: StudentloginComponent },
      { path: 'counselorlogin', component: CounselorloginComponent },
      { path: 'mentorlogin', component: MentorloginComponent },
      { path: 'professorlogin', component: ProfessorloginComponent },
      { path: 'advisorlogin', component: AdvisorloginComponent },
      // This things haves to be guarded and classified
      { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
      { path: 'register', component: RegisterComponent, canActivate: [AdminGuard]},
      { path: 'status', component: StatusComponent},
      { path: 'schedule', component: ScheduleComponent, canActivate: [AuthGuard] },
      { path: 'main', component: MainComponent,  canActivate: [AuthGuard] },
      { path: 'adminmain', component: AdminmainComponent, canActivate: [AdminGuard]}
    ])
  ],
  // Each guard just check that the user have an specific characteristic to authorize the navegation. In this case it checks that the user
  // have the role to enter the respective pages. It is like and RBAC but for Angular.
  providers: [AuthService, TaskService, AuthGuard, AdminGuard, StudentGuard, StudentService],
  bootstrap: [AppComponent]
})

export class AppModule { }
