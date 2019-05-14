import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HodNotificationComponent } from './hod-notification.component';

describe('HodNotificationComponent', () => {
  let component: HodNotificationComponent;
  let fixture: ComponentFixture<HodNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HodNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HodNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
