import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty-home',
  templateUrl: './faculty-home.component.html',
  styleUrls: ['./faculty-home.component.css']
})
export class FacultyHomeComponent implements OnInit {
  isShow: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  onCreate() {
    this.isShow = true;
  }
}
