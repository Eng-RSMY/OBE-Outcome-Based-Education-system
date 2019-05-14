import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyRegistrationComponent } from './faculty-registration/faculty-registration.component';
import { CourseRegistrationComponent } from './course-registration/course-registration.component';
import { QuestionCreatComponent } from './question-creat/question-creat.component';
import { HomeComponent } from './home/home.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AdminComponent } from './admin/admin.component';
import { HODComponent } from './hod/hod.component';
import { CourseCoordinatorComponent } from './course-coordinator/course-coordinator.component';
import { FacultyHomeComponent } from './faculty/faculty-home/faculty-home.component';
import { AssesmentCreateComponent } from './faculty/assesment-create/assesment-create.component';

import { ViewInfoComponent } from './faculty/view-info/view-info.component';
import { UpdateInfoComponent } from './faculty/update-info/update-info.component';
import { ManualComponent } from './faculty/manual/manual.component';
import { HodHomeComponent } from './hod/hod-home/hod-home.component';
import { HodManualComponent } from './hod/hod-manual/hod-manual.component';
import { HodNotificationComponent } from './hod/hod-notification/hod-notification.component';
import { HodViewInfoComponent } from './hod/hod-view-info/hod-view-info.component';
import { COViewStudentInfoComponent } from './course-coordinator/co-view-student-info/co-view-student-info.component';
import { COViewFacultyInfoComponent } from './course-coordinator/co-view-faculty-info/co-view-faculty-info.component';
import { AssignCourseComponent } from './course-coordinator/assign-course/assign-course.component';
import { DropCourseComponent } from './course-coordinator/drop-course/drop-course.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'faculty', component: FacultyRegistrationComponent },
  { path: 'course', component: CourseRegistrationComponent },
  { path: 'question', component: QuestionCreatComponent },
  { path: 'home', component: HomeComponent },
  { path: 'facultyHome', component: FacultyComponent },
  { path: 'adminHome', component: AdminComponent },
  { path: 'HODHome', component: HODComponent },
  { path: 'course-coordinatorHome', component: CourseCoordinatorComponent },
  { path: 'Faculty-homepage', component: FacultyHomeComponent },
  { path: 'assesment-create', component: AssesmentCreateComponent },
  { path: 'view-info', component: ViewInfoComponent },
  { path: 'update-info', component: UpdateInfoComponent },
  { path: 'manual', component: ManualComponent },
  { path: 'hod_manual', component: HodManualComponent },
  { path: 'hod_view_info', component: HodViewInfoComponent },
  { path: 'hod_home', component: HodHomeComponent },
  { path: 'hod_notification', component: HodNotificationComponent },
  { path: 'assign_course', component: AssignCourseComponent },
  { path: 'drop_course', component: DropCourseComponent },
  { path: 'CCO_view_student_info', component: COViewStudentInfoComponent },
  { path: 'CCO_view_faculty_info', component: COViewFacultyInfoComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =
  [
    AssignCourseComponent,
    DropCourseComponent,
    COViewStudentInfoComponent,
    COViewFacultyInfoComponent,
      HodManualComponent,
      HodViewInfoComponent,
      HodNotificationComponent,
      HodHomeComponent,
      ViewInfoComponent,
      UpdateInfoComponent,
      HomeComponent,
      ManualComponent,
      FacultyRegistrationComponent,
      CourseRegistrationComponent,
      QuestionCreatComponent,
      FacultyComponent,
      AdminComponent,
      HODComponent,
      CourseCoordinatorComponent,
      FacultyHomeComponent,
      AssesmentCreateComponent
  ]
