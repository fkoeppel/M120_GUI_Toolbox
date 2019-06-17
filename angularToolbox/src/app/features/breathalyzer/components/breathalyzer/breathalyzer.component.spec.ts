import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreathalyzerComponent } from './breathalyzer.component';

describe('BreathalyzerComponent', () => {
  let component: BreathalyzerComponent;
  let fixture: ComponentFixture<BreathalyzerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreathalyzerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreathalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
