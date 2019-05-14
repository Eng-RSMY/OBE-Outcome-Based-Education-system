import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HodViewInfoComponent } from './hod-view-info.component';

describe('HodViewInfoComponent', () => {
  let component: HodViewInfoComponent;
  let fixture: ComponentFixture<HodViewInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HodViewInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HodViewInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
