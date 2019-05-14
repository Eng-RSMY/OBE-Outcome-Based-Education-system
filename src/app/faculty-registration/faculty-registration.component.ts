import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-faculty-registration',
  templateUrl: './faculty-registration.component.html',
  styleUrls: ['./faculty-registration.component.css']
})
export class FacultyRegistrationComponent implements OnInit {
  facultyForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.facultyForm = this.fb.group({
      
      /*question:['', Validators.required],
      questionNumber: ['',Validators.required],
      CO: ['', Validators.required],
      CL: ['', Validators.required],
      mark: ['', Validators.required],
      addQuestion: this.fb.array([this.addQuestionGroup()])*/
      firstName: [],
      lastName: [],
      department: [],
      faculty_id: [],
      email: []

    });
  }
  onSubmit() {
    console.log(this.facultyForm.value);
  }
}
