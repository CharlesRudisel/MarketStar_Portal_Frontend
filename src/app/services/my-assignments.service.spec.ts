import { TestBed } from '@angular/core/testing';

import { MyAssignmentsService } from './my-assignments.service';

describe('MyAssignmentsService', () => {
  let service: MyAssignmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAssignmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
