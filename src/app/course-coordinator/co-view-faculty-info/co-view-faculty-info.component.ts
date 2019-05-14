import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-co-view-faculty-info',
  templateUrl: './co-view-faculty-info.component.html',
  styleUrls: ['./co-view-faculty-info.component.css']
})
export class COViewFacultyInfoComponent implements OnInit {
  faculty_viewInfo: FormGroup;
  isShow: Boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.faculty_viewInfo = this.fb.group({
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
