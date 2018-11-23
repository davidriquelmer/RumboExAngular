import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {AngularMaterialModule} from "./angular-material.module";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// import {GoogleChartsModule} from 'angular-google-charts';

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
import {ErroralertService} from './services/erroralert.service';
import { ErroralertComponent } from './components/erroralert/erroralert.component';
import { SidebarComponent } from './components/sharedComponents/sidebar/sidebar.component';
import { TopnavbarComponent } from './components/sharedComponents/topnavbar/topnavbar.component';
import { BreadcrumbComponent } from './components/sharedComponents/breadcrumb/breadcrumb.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DailyScheduleComponent } from './components/daily-schedule/daily-schedule.component';
import { WeeklyScheduleComponent } from './components/weekly-schedule/weekly-schedule.component';

import { NewTaskFormComponent } from './components/new-task-form/new-task-form.component';
import { NewCourseTaskForm } from './components/individual-course/individual-course.component';
import {NewTaskForm} from "./components/daily-schedule/daily-schedule.component";

import { WidgetComponent } from './components/widget/widget.component';
import { IndividualCourseComponent } from './components/individual-course/individual-course.component';
import { LoginmenuComponent } from './components/loginmenu/loginmenu.component';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import {MaterialsModule} from './materials/materials.module';
import {PopoverComponent} from './components/popover/popover.component';
import {ModalComponent} from './components/modal/modal.component';
import {CourseService} from "./services/course.service";
import {GooglechartService} from "./services/googlechart.service";
import { ProfileComponent } from './components/profile/profile.component';

// import {StoreModule} from '@ngrx/store';
// import {reducer} from './store2/reducers/student.reducer';
// import {EffectsModule} from "@ngrx/effects";
// import {StudentEffect} from "./store2/effects/student.effect";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './store/reducers';
import { environment } from '../environments/environment';
import { StudentEffects } from './store/effects/student.effects';
import {CourseEffects} from "./store/effects/course.effects";
import { PsychologistmainComponent } from './components/mains/psychologistmain/psychologistmain.component';
import { MessagesComponent } from './components/messages/messages.component';
import {TaskEffects} from "./store/effects/task.effects";
import {AppStoreModule} from "./app-store.module";

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
    AdminmainComponent,
    ErroralertComponent,
    SidebarComponent,
    TopnavbarComponent,
    BreadcrumbComponent,
    DashboardComponent,
    CalendarComponent,
    DailyScheduleComponent,
    WeeklyScheduleComponent,
    WidgetComponent,
    IndividualCourseComponent,
    NewTaskFormComponent,
    NewCourseTaskForm,
    NewTaskForm,
    LoginmenuComponent,
    PopoverComponent,
    ModalComponent,
    ProfileComponent,
    PsychologistmainComponent,
    MessagesComponent
  ],
  imports: [
    MbscModule,
    BrowserModule,
    FormsModule,
    MaterialsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    AppStoreModule
  ],
  // entryComponents: [NewCourseTaskForm, NewTaskForm],
  // Each guard just check that the user have an specific characteristic to authorize the navegation. In this case it checks that the user
  // have the role to enter the respective pages. It is like and RBAC but for Angular.
  providers: [AuthService, TaskService, AuthGuard, AdminGuard, StudentGuard, StudentService, ErroralertService, CourseService, GooglechartService],
  bootstrap: [AppComponent]
})

export class AppModule { }
