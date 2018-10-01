import { TestBed } from '@angular/core/testing';

import { GooglechartService } from './googlechart.service';

describe('GooglechartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GooglechartService = TestBed.get(GooglechartService);
    expect(service).toBeTruthy();
  });
});
