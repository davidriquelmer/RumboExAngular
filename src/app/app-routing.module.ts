import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import {LoginComponent} from "./components/logins/login/login.component";
import {MentorloginComponent} from "./components/logins/mentorlogin/mentorlogin.component";
import {AdminloginComponent} from "./components/logins/adminlogin/adminlogin.component";
import {CounselorloginComponent} from "./components/logins/counselorlogin/counselorlogin.component";
import {ProfessorloginComponent} from "./components/logins/professorlogin/professorlogin.component";
import {AdvisorloginComponent} from "./components/logins/advisorlogin/advisorlogin.component";
import {StudentloginComponent} from "./components/logins/studentlogin/studentlogin.component";

import {ScheduleComponent} from "./components/schedule/schedule.component";
import {MainComponent} from "./components/mains/main/main.component";
import {RegisterComponent} from "./components/register/register.component";
import {AdminmainComponent} from "./components/mains/adminmain/adminmain.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {AuthGuard} from "./guards/auth.guard";
import {StatusComponent} from "./components/status/status.component";
import {AdminGuard} from "./guards/admin.guard";

import {WeeklyScheduleComponent} from "./components/weekly-schedule/weekly-schedule.component";
import {DailyScheduleComponent} from "./components/daily-schedule/daily-schedule.component";
import {CalendarComponent} from "./components/calendar/calendar.component";

import {Tester1Component} from "./components/tester1/tester1.component";

const routes: Routes = [

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
  // { path: 'schedule', component: ScheduleComponent, canActivate: [AuthGuard] },
  { path: 'adminmain', component: AdminmainComponent, canActivate: [AdminGuard]},

  // Student app routes
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent,  canActivate: [AuthGuard], children: [
      { path: 'calendar', component: CalendarComponent, outlet: 'content' },
      { path: 'today', component: DailyScheduleComponent, outlet: 'content' },
      { path: 'this-week', component: WeeklyScheduleComponent, outlet: 'content' }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true, enableTracing: true}) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
