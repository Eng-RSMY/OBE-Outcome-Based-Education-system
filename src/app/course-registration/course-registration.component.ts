import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-course-registration',
  templateUrl: './course-registration.component.html',
  styleUrls: ['./course-registration.component.css']
})
export class CourseRegistrationComponent implements OnInit {
  courseRegistration: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.courseRegistration = this.fb.group({
      courseTitle: ['', Validators.required],
      courseCode: ['', Validators.required],
      credit_hour: ['', Validators.required],
      CourseDescription: ['', Validators.required],
      term: [],  
      section: [],
      session: [],
      number_of_practicles: [],
      number_of_lectures: [],
      addCourseObjective: this.fb.array([this.addCourseObjectiveGroup()]),
      addCourseOutcome: this.fb.array([this.addCourseOutcomeGroup()]),
      
    });
  }
  addCourseObjectiveGroup() {
    return this.fb.group({
      course_Objective: []
    })
  }
  addCourseOutcomeGroup() {
    return this.fb.group({
      course_Outcome: [],
      PLO: []
    })
  }
  onSubmit() {
    console.log(this.courseRegistration.value);
  }
  get courseObjectiveArray() {
    return <FormArray>this.courseRegistration.get('addCourseObjective');
  }
  get courseOutcomeArray() {
    return <FormArray>this.courseRegistration.get('addCourseOutcome');
  }
  onAddObjective() {
    this.courseObjectiveArray.push(this.addCourseObjectiveGroup());
  }
  onRemoveObjective(index) {
    if (index == 0) {

    } else {
      this.courseObjectiveArray.removeAt(index);
    }
   
  }
  onAddOutcome() {
    this.courseOutcomeArray.push(this.addCourseOutcomeGroup());
  }
  onRemoveOutcome(index) {

    console.log(index);
    if (index == 0) {
      
    }else {
      this.courseOutcomeArray.removeAt(index);
    }

  }

}
