import { TestBed, inject } from '@angular/core/testing';

import { ErroralertService } from './erroralert.service';

describe('ErroralertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErroralertService]
    });
  });

  it('should be created', inject([ErroralertService], (service: ErroralertService) => {
    expect(service).toBeTruthy();
  }));
});
