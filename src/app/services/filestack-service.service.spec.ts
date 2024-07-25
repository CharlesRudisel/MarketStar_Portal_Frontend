import { TestBed } from '@angular/core/testing';

import { FilestackServiceService } from './filestack-service.service';

describe('FilestackServiceService', () => {
  let service: FilestackServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilestackServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
