import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaHealthComponent } from './corona-health.component';

describe('CoronaHealthComponent', () => {
  let component: CoronaHealthComponent;
  let fixture: ComponentFixture<CoronaHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
