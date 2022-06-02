import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownclockComponent } from './countdownclock.component';

describe('CountdownclockComponent', () => {
  let component: CountdownclockComponent;
  let fixture: ComponentFixture<CountdownclockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownclockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
