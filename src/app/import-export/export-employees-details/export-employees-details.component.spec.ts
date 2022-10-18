import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportEmployeesDetailsComponent } from './export-employees-details.component';

describe('ExportEmployeesDetailsComponent', () => {
  let component: ExportEmployeesDetailsComponent;
  let fixture: ComponentFixture<ExportEmployeesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportEmployeesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportEmployeesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
