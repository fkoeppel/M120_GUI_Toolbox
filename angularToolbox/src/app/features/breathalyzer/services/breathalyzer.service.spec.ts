import { TestBed } from '@angular/core/testing';

import { BreathalyzerService } from './breathalyzer.service';

describe('BreathalyzerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BreathalyzerService = TestBed.get(BreathalyzerService);
    expect(service).toBeTruthy();
  });
});
