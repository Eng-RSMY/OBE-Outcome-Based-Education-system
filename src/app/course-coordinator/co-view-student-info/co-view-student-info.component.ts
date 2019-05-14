import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-co-view-student-info',
  templateUrl: './co-view-student-info.component.html',
  styleUrls: ['./co-view-student-info.component.css']
})
export class COViewStudentInfoComponent implements OnInit {
  isShow: Boolean = false;
  CO_viewInfo: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.CO_viewInfo = this.fb.group({
      term: [],
      courseCode: [],
      section: [],
      batch: []
    });
  }
  isShowClicked() {
    this.isShow = true;
  }
  isCloseClicked() {
    this.isShow = false;
  }
}
