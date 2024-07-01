import { TestBed } from '@angular/core/testing';

import { AvailableAssignmentsService } from './available-assignments.service';

describe('AvailableAssignmentsService', () => {
  let service: AvailableAssignmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableAssignmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
