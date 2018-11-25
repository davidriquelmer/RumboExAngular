import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './components/logins/login/login.component';
import {MentorloginComponent} from './components/logins/mentorlogin/mentorlogin.component';
import {AdminloginComponent} from './components/logins/adminlogin/adminlogin.component';
import {CounselorloginComponent} from './components/logins/counselorlogin/counselorlogin.component';
import {ProfessorloginComponent} from './components/logins/professorlogin/professorlogin.component';
import {AdvisorloginComponent} from './components/logins/advisorlogin/advisorlogin.component';
import {StudentloginComponent} from './components/logins/studentlogin/studentlogin.component';

import {ScheduleComponent} from './components/schedule/schedule.component';
import {StudentmainComponent} from './components/mains/main/studentmain.component';
import {RegisterComponent} from './components/register/register.component';
import {AdminmainComponent} from './components/mains/adminmain/adminmain.component';
import {LogoutComponent} from './components/logout/logout.component';
import {AuthGuard} from './guards/auth.guard';
import {StatusComponent} from './components/status/status.component';
import {AdminGuard} from './guards/admin.guard';

import {WeeklyScheduleComponent} from './components/weekly-schedule/weekly-schedule.component';
import {DailyScheduleComponent, NewTaskForm} from './components/daily-schedule/daily-schedule.component';
import {CalendarComponent} from './components/calendar/calendar.component';

import {IndividualCourseComponent, NewCourseTaskForm} from './components/individual-course/individual-course.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginmenuComponent} from './components/loginmenu/loginmenu.component';
import {ProfileComponent} from "./components/profile/profile.component";
import {CounselormainComponent} from "./components/mains/counselormain/counselormain.component";
import {WidgetComponent} from "./components/widget/widget.component";
import {AppComponent} from "./app.component";
import {ModalComponent} from "./components/modal/modal.component";
import {NewTaskFormComponent} from "./components/new-task-form/new-task-form.component";
import {PsychologistmainComponent} from "./components/mains/psychologistmain/psychologistmain.component";
import {ErroralertComponent} from "./components/erroralert/erroralert.component";
import {MessagesComponent} from "./components/messages/messages.component";
import {SidebarComponent} from "./components/sharedComponents/sidebar/sidebar.component";
import {BreadcrumbComponent} from "./components/sharedComponents/breadcrumb/breadcrumb.component";
import {TopnavbarComponent} from "./components/sharedComponents/topnavbar/topnavbar.component";
import {PopoverComponent} from "./components/popover/popover.component";
import {MentormainComponent} from "./components/mains/mentormain/mentormain.component";


const routes: Routes = [

  // This part are the login's. They don't use guard. (The guard of the login is practically the code in flask.)
  { path: 'loginmenu', component: LoginmenuComponent },
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
  // { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'studentmain', component: StudentmainComponent,  canActivate: [AuthGuard], children: [
      { path: 'calendar', component: CalendarComponent, outlet: 'content' },
      { path: 'today', component: DailyScheduleComponent, outlet: 'content' },
      { path: 'this-week', component: WeeklyScheduleComponent, outlet: 'content' },

      { path: 'course', component: IndividualCourseComponent, outlet: 'content'},
      { path: 'dashboard', component: DashboardComponent, outlet: 'content'},
      { path: 'profile', component: ProfileComponent, outlet: 'content'}
    ]
  },

  // Mentor routes
  { path: 'mentormain', component: MentormainComponent, canActivate: [AuthGuard], children: [
      { path: 'profile', component: ProfileComponent, outlet: 'content'}
    ]
  },

  //Counselor routes
  { path: 'counselormain', component: CounselormainComponent, canActivate: [AuthGuard], children: [
      { path: 'profile', component: ProfileComponent, outlet: 'content'}
    ]
  },

  // Psychologist routes
  { path: 'psychologistmain', component: PsychologistmainComponent, canActivate: [AuthGuard], children: [
      { path: 'profile', component: ProfileComponent, outlet: 'content'}
    ]
  },

  // default path, when the path in the URL is empty
  { path: '', component: LoginmenuComponent },
  // when the requested URL doesn't match any defined path
  { path: '**', redirectTo: '/' },
];

@NgModule({
  // declarations: [
  //   AppComponent,
  //   LoginComponent,
  //   StatusComponent,
  //   StudentmainComponent,
  //   ScheduleComponent,
  //   LogoutComponent,
  //   AdminloginComponent,
  //   StudentloginComponent,
  //   CounselorloginComponent,
  //   MentorloginComponent,
  //   ProfessorloginComponent,
  //   RegisterComponent,
  //   AdvisorloginComponent,
  //   CounselormainComponent,
  //   AdminmainComponent,
  //   ErroralertComponent,
  //   SidebarComponent,
  //   TopnavbarComponent,
  //   BreadcrumbComponent,
  //   DashboardComponent,
  //   CalendarComponent,
  //   DailyScheduleComponent,
  //   WeeklyScheduleComponent,
  //   WidgetComponent,
  //   IndividualCourseComponent,
  //   NewTaskFormComponent,
  //   NewCourseTaskForm,
  //   NewTaskForm,
  //   LoginmenuComponent,
  //   PopoverComponent,
  //   ModalComponent,
  //   ProfileComponent,
  //   PsychologistmainComponent,
  //   MessagesMenuComponent
  // ],
  imports: [ RouterModule.forRoot(routes
    // Uncomment this for testing purposes
    // ,{enableTracing: true}
    ) ],
  entryComponents: [NewCourseTaskForm, NewTaskForm],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
