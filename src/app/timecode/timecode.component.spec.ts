import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecodeComponent } from './timecode.component';

describe('TimecodeComponent', () => {
  let component: TimecodeComponent;
  let fixture: ComponentFixture<TimecodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimecodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
