import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportEmployeesOtherDetailsComponent } from './export-employees-other-details.component';

describe('ExportEmployeesOtherDetailsComponent', () => {
  let component: ExportEmployeesOtherDetailsComponent;
  let fixture: ComponentFixture<ExportEmployeesOtherDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportEmployeesOtherDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportEmployeesOtherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
