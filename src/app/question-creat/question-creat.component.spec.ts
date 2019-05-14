import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCreatComponent } from './question-creat.component';

describe('QuestionCreatComponent', () => {
  let component: QuestionCreatComponent;
  let fixture: ComponentFixture<QuestionCreatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionCreatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
