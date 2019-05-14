import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-view-info',
  templateUrl: './view-info.component.html',
  styleUrls: ['./view-info.component.css']
})
export class ViewInfoComponent implements OnInit {
  viewInfo: FormGroup;
  constructor(private fb: FormBuilder) { }
  isShow: Boolean = false;
  ngOnInit() {
    this.viewInfo = this.fb.group({
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
