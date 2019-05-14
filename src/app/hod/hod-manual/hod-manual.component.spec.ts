import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HodManualComponent } from './hod-manual.component';

describe('HodManualComponent', () => {
  let component: HodManualComponent;
  let fixture: ComponentFixture<HodManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HodManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HodManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
