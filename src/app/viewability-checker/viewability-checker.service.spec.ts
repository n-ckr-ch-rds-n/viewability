import { TestBed } from '@angular/core/testing';

import { ViewabilityCheckerService } from './viewability-checker.service';

describe('ViewabilityCheckerService', () => {
  let service: ViewabilityCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewabilityCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
