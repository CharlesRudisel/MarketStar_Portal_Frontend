import { TestBed } from '@angular/core/testing';

import { CompletedAssignmentsService } from './completed-assignments.service';

describe('CompletedAssignmentsService', () => {
  let service: CompletedAssignmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompletedAssignmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
