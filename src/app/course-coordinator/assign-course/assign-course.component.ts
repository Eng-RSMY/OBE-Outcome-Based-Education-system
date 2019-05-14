import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-assign-course',
  templateUrl: './assign-course.component.html',
  styleUrls: ['./assign-course.component.css']
})
export class AssignCourseComponent implements OnInit {
  assign_course: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.assign_course = this.fb.group({
      faculty_name: [],
      courseTitle:[],
      department:[],
      term: [],
      courseCode: [],
      section: [],
      batch: []
    });

  }
}
