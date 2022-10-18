import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyAttendenceReportComponent } from './daily-attendence-report.component';

describe('DailyAttendenceReportComponent', () => {
  let component: DailyAttendenceReportComponent;
  let fixture: ComponentFixture<DailyAttendenceReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyAttendenceReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyAttendenceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
