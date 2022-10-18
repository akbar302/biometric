import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportEmployeeLeaveComponent } from './export-employee-leave.component';

describe('ExportEmployeeLeaveComponent', () => {
  let component: ExportEmployeeLeaveComponent;
  let fixture: ComponentFixture<ExportEmployeeLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportEmployeeLeaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportEmployeeLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
