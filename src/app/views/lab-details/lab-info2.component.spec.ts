import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabInfo2Component } from './lab-info2.component';

describe('LabInfo2Component', () => {
  let component: LabInfo2Component;
  let fixture: ComponentFixture<LabInfo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabInfo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabInfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
