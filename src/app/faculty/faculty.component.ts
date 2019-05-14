import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  isHome: boolean = true;
  isViewInfo: boolean = false;
  isUpdateInfo: boolean = false;
  isManual: boolean = false;
  isNotification: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  isHomeClicked() {
    this.isHome = true;
    this.isViewInfo = false;
    this.isUpdateInfo = false;
    this.isManual = false;
    this.isNotification = false;
  }
  isViewClicked() {
    this.isViewInfo = true;
    this.isHome = false;
    this.isManual = false;
    this.isNotification = false;
    this.isUpdateInfo = false;
  }
  isUpdateClicked() {
    this.isUpdateInfo = true;
    this.isViewInfo = false;
    this.isHome = false;
    this.isManual = false;
    this.isNotification = false;
  }
  isManualClicked() {
    this.isManual = true;
    this.isViewInfo = false;
    this.isHome = false;
    this.isNotification = false;
    this.isUpdateInfo = false;
  }
  isNotificationClicked() {
    this.isNotification = true;
    this.isManual = false;
    this.isViewInfo = false;
    this.isHome = false;

    this.isUpdateInfo = false;
  }
}
