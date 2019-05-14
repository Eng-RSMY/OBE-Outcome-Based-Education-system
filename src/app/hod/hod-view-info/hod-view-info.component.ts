import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-hod-view-info',
  templateUrl: './hod-view-info.component.html',
  styleUrls: ['./hod-view-info.component.css']
})
export class HodViewInfoComponent implements OnInit {
  hod_viewInfo: FormGroup;
  isShow: Boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.hod_viewInfo = this.fb.group({
      term: [],
      courseCode: [],
      section: [],
      batch:[]
    });
  }
  isShowClicked() {
    this.isShow = true;
  }
  isCloseClicked() {
    this.isShow = false;
  }
}
