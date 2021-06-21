import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabInfo3Component } from './lab-info3.component';

describe('LabInfo3Component', () => {
  let component: LabInfo3Component;
  let fixture: ComponentFixture<LabInfo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabInfo3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabInfo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
