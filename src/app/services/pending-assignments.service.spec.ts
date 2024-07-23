import { TestBed } from '@angular/core/testing';

import { PendingAssignmentsService } from './pending-assignments.service';

describe('PendingAssignmentsService', () => {
  let service: PendingAssignmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PendingAssignmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
