import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { COViewStudentInfoComponent } from './co-view-student-info.component';

describe('COViewStudentInfoComponent', () => {
  let component: COViewStudentInfoComponent;
  let fixture: ComponentFixture<COViewStudentInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ COViewStudentInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(COViewStudentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
