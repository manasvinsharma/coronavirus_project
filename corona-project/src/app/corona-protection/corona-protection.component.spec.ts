import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaProtectionComponent } from './corona-protection.component';

describe('CoronaProtectionComponent', () => {
  let component: CoronaProtectionComponent;
  let fixture: ComponentFixture<CoronaProtectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaProtectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
