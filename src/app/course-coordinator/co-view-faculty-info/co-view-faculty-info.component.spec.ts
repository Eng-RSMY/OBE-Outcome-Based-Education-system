import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { COViewFacultyInfoComponent } from './co-view-faculty-info.component';

describe('COViewFacultyInfoComponent', () => {
  let component: COViewFacultyInfoComponent;
  let fixture: ComponentFixture<COViewFacultyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ COViewFacultyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(COViewFacultyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
