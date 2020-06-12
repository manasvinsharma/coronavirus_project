import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentStatsComponent } from './continent-stats.component';

describe('ContinentStatsComponent', () => {
  let component: ContinentStatsComponent;
  let fixture: ComponentFixture<ContinentStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
