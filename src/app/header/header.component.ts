import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  isLoggedOut: boolean = false;
  isAdmin: boolean = false;
  isCourseCoordinator: boolean = false;
  isFaculty: boolean = false;
  isHead: boolean = false;
  isfacultyLoggedIn: boolean = false;
  isHODLoggedIn: boolean = false;
  isAdminLoggedIn: boolean = false;
  isCOLoggedIn: boolean = false;
  public formGroup: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
   /* this.logInform = this.fb.group({
      userID: [],
      password: [],
    });*/
  }
   logInform = new FormGroup({
     userID: new FormControl(''),
     password: new FormControl(''),
     passwordAdmin: new FormControl('1234')
});
  
  //value2: string = this.logInform.value.password;
   passwordMatchValidator(g: FormGroup) {
     if (g.get('password').value === g.get('passwordAdmin').value) {
       console.log('chole');
     }
    
}
  if() {

  }
  isLogIn() {
    this.isLoggedIn = true;
    console.log(this.logInform.value);
    
  }
  isFacultyLogIn() {
    this.isfacultyLoggedIn = true;
    console.log(this.logInform.value);
    this.passwordMatchValidator;
  }
  isHODLogIn() {
    this.isHODLoggedIn = true;
    console.log(this.logInform.value);
    this.passwordMatchValidator;
  }
  isCourseCoordinatorLogIn() {
    this.isCOLoggedIn = true;
    console.log(this.logInform.value);
    this.passwordMatchValidator;
  }
  isAdminLogIn() {
    this.isAdminLoggedIn = true;
    console.log(this.logInform.value);
    this.passwordMatchValidator;
  }
  
  isLogOut() {
    this.isLoggedIn = false;
    this.isfacultyLoggedIn = false;
    this.isHODLoggedIn =false;
    this.isCOLoggedIn = false;
    this.isAdminLoggedIn = false;
  }
  

}
