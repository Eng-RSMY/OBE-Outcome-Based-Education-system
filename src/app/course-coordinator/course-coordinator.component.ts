import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-coordinator',
  templateUrl: './course-coordinator.component.html',
  styleUrls: ['./course-coordinator.component.css']
})
export class CourseCoordinatorComponent implements OnInit {
  isAssign_course: boolean = true;
  isDrop_course: boolean = false;
  isView_student_Info: boolean = false;
  isView_faculty_Info: boolean = false;
 
  constructor() { }

  ngOnInit() {
  }
  isAssignClicked() {
    this.isAssign_course = true;
    this.isDrop_course = false;
    this.isView_student_Info = false;
    this.isView_faculty_Info = false;
  }
  isView_student_info_Clicked() {
    this.isAssign_course = false;
    this.isDrop_course = false;
    this.isView_student_Info = true;
    this.isView_faculty_Info = false;

  }

  isView_faculty_info_Clicked() {
    this.isAssign_course = false;
    this.isDrop_course = false;
    this.isView_student_Info = false;
    this.isView_faculty_Info = true;

  }
  isDropClicked() {
    this.isAssign_course = false;
    this.isDrop_course = true;
    this.isView_student_Info = false;
    this.isView_faculty_Info = false;

  }

}
