import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatesVisualizerComponent } from './coordinates-visualizer.component';

describe('CoordinatesVisualizerComponent', () => {
  let component: CoordinatesVisualizerComponent;
  let fixture: ComponentFixture<CoordinatesVisualizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinatesVisualizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatesVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
