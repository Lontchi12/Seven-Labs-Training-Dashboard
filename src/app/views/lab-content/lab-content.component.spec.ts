import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabContentComponent } from './lab-content.component';

describe('LabContentComponent', () => {
  let component: LabContentComponent;
  let fixture: ComponentFixture<LabContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
