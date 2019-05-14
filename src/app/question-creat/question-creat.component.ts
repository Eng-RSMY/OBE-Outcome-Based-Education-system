import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-question-creat',
  templateUrl: './question-creat.component.html',
  styleUrls: ['./question-creat.component.css']
})
export class QuestionCreatComponent implements OnInit {
  questionForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.questionForm = this.fb.group({
      term: [],
      courseCode: [],
      section: [],
      /*question:['', Validators.required],
      questionNumber: ['',Validators.required],
      CO: ['', Validators.required],
      CL: ['', Validators.required],
      mark: ['', Validators.required],*/
      addQuestion:this.fb.array([this.addQuestionGroup()])
      
    });
  }
  addQuestionGroup() {
    return this.fb.group({
      
      questionDescription: [],
      number: [],
      courseOutcome: [],
      cognitiveLevel: [],
      marks:[]
    })
  }

  
  onSubmit() {
    console.log(this.questionForm.value);
  }
  get QuestionArray() {
    return <FormArray>this.questionForm.get('addQuestion');
  }
  onAddQuestion() {
    this.QuestionArray.push(this.addQuestionGroup());
  }
  onRemoveQuestion(index) {
    if (index == 0) {

    } else {
      this.QuestionArray.removeAt(index);
    }

   
  }

}
