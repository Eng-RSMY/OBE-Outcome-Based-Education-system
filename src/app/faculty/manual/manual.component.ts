import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent implements OnInit {
  manualForm: FormGroup;
  constructor(private fb: FormBuilder) { }

 ngOnInit() {
   // this.manualForm = this.fb.group({
     // term: [],
      //courseCode: [],
      //section: [],
    //});
  }
}
