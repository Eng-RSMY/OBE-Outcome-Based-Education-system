import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { FacultyComponent } from './faculty/faculty.component';
import { HODComponent } from './hod/hod.component';
import { CourseCoordinatorComponent } from './course-coordinator/course-coordinator.component';
import { FacultyHomeComponent } from './faculty/faculty-home/faculty-home.component';
import { CourseOutlineComponent } from './course-outline/course-outline.component';
import { AssesmentCreateComponent } from './faculty/assesment-create/assesment-create.component';
import { ViewInfoComponent } from './faculty/view-info/view-info.component';
import { UpdateInfoComponent } from './faculty/update-info/update-info.component';
import { ManualComponent } from './faculty/manual/manual.component';
import { HodManualComponent } from './hod/hod-manual/hod-manual.component';
import { HodHomeComponent } from './hod/hod-home/hod-home.component';
import { HodNotificationComponent } from './hod/hod-notification/hod-notification.component';
import { HodViewInfoComponent } from './hod/hod-view-info/hod-view-info.component';

import { AssignCourseComponent } from './course-coordinator/assign-course/assign-course.component';
import { DropCourseComponent } from './course-coordinator/drop-course/drop-course.component';
import { COViewStudentInfoComponent } from './course-coordinator/co-view-student-info/co-view-student-info.component';
import { COViewFacultyInfoComponent } from './course-coordinator/co-view-faculty-info/co-view-faculty-info.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    FacultyComponent,
    HODComponent,
    CourseCoordinatorComponent,
    FacultyHomeComponent,
    CourseOutlineComponent,
    AssesmentCreateComponent,
    ViewInfoComponent,
    UpdateInfoComponent,
    ManualComponent,
    HodViewInfoComponent,
    HodNotificationComponent,
    HodManualComponent,
    HodHomeComponent,
    HodNotificationComponent,
    HodViewInfoComponent,
   
    AssignCourseComponent,
    DropCourseComponent,
    COViewStudentInfoComponent,
    COViewFacultyInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
