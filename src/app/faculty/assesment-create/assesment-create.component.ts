import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { DISABLED } from '@angular/forms/src/model';
@Component({
  selector: 'app-assesment-create',
  templateUrl: './assesment-create.component.html',
  styleUrls: ['./assesment-create.component.css']
})
export class AssesmentCreateComponent implements OnInit {
  isShow: boolean = true;
  assesmentForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.assesmentForm = this.fb.group({
      term: [],
      courseCode: [],
      section: [],
      assignment:[],
      presentation:[],
      quiz:[],
      mid: [],
      final:[]

    });
  }
  onCancel() {
    this.isShow = false;
  }

}
