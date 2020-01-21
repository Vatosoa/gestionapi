import { TestBed } from '@angular/core/testing';

import { JuryService } from './jury.service';

describe('JuryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JuryService = TestBed.get(JuryService);
    expect(service).toBeTruthy();
  });
});
