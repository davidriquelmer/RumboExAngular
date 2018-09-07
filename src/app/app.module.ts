import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';

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
import { WidgetComponent } from './components/widget/widget.component';
import { IndividualCourseComponent } from './components/individual-course/individual-course.component';
import { LoginmenuComponent } from './components/loginmenu/loginmenu.component';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import {MaterialsModule} from './materials/materials.module';
import {PopoverComponent} from './components/popover/popover.component';
import {ModalComponent} from './components/modal/modal.component';


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
    NewTaskFormComponent,
    WidgetComponent,
    IndividualCourseComponent,
    LoginmenuComponent,
    PopoverComponent,
    ModalComponent
  ],
  imports: [ 
    MbscModule, 
    BrowserModule,
    FormsModule,
    MaterialsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule,
    MatProgressBarModule,
    MatChipsModule,
    MatGridListModule,
    MatTableModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatDialogModule
  ],
  // Each guard just check that the user have an specific characteristic to authorize the navegation. In this case it checks that the user
  // have the role to enter the respective pages. It is like and RBAC but for Angular.
  providers: [AuthService, TaskService, AuthGuard, AdminGuard, StudentGuard, StudentService, ErroralertService],
  bootstrap: [AppComponent]
})

export class AppModule { }
