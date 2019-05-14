import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssesmentCreateComponent } from './assesment-create.component';

describe('AssesmentCreateComponent', () => {
  let component: AssesmentCreateComponent;
  let fixture: ComponentFixture<AssesmentCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssesmentCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssesmentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
