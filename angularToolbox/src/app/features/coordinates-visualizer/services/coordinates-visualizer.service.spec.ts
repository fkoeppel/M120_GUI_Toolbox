import { TestBed } from '@angular/core/testing';

import { CoordinatesVisualizerService } from './coordinates-visualizer.service';

describe('CoordinatesVisualizerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoordinatesVisualizerService = TestBed.get(CoordinatesVisualizerService);
    expect(service).toBeTruthy();
  });
});
