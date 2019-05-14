import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-drop-course',
  templateUrl: './drop-course.component.html',
  styleUrls: ['./drop-course.component.css']
})
export class DropCourseComponent implements OnInit {
  drop_course: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.drop_course = this.fb.group({
      faculty_name: [],
      courseTitle: [],
      department: [],
      term: [],
      courseCode: [],
      section: [],
      batch: []
    });
  }

}
