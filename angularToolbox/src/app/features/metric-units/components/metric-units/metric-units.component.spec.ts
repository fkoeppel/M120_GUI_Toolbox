import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricUnitsComponent } from './metric-units.component';

describe('MetricUnitsComponent', () => {
  let component: MetricUnitsComponent;
  let fixture: ComponentFixture<MetricUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetricUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
