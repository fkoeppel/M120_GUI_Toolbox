import { TestBed } from '@angular/core/testing';

import { MetricUnitsService } from './metric-units.service';

describe('MetricUnitsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetricUnitsService = TestBed.get(MetricUnitsService);
    expect(service).toBeTruthy();
  });
});
