import { TestBed } from '@angular/core/testing';

import { LabGuardGuard } from './lab-guard.guard';

describe('LabGuardGuard', () => {
  let guard: LabGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LabGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
