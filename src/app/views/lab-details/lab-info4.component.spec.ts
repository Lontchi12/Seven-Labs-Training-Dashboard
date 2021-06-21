import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabInfo4Component } from './lab-info4.component';

describe('LabInfo4Component', () => {
  let component: LabInfo4Component;
  let fixture: ComponentFixture<LabInfo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabInfo4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabInfo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
