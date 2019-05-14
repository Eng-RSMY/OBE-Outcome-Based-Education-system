import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent implements OnInit {
  updateInfoForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  isShow: Boolean = false;
  ngOnInit() {
    this.updateInfoForm = this.fb.group({
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
