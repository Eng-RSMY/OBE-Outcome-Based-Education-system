import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hod',
  templateUrl: './hod.component.html',
  styleUrls: ['./hod.component.css']
})
export class HODComponent implements OnInit {
  isHome: boolean = true;
  isViewInfo: boolean = false;
  isManual: boolean = false;
  isNotification: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  isHomeClicked() {
    this.isHome = true;
    this.isViewInfo = false;
    this.isManual = false;
    this.isNotification = false;
  }
  isViewClicked() {
    this.isViewInfo = true;
    this.isHome = false;
    this.isManual = false;
    this.isNotification = false;
  }
 
  isManualClicked() {
    this.isManual = true;
    this.isViewInfo = false;
    this.isHome = false;
    this.isNotification = false;
  }
  isNotificationClicked() {
    this.isNotification = true;
    this.isManual = false;
    this.isViewInfo = false;
    this.isHome = false;
  }
}
