import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportEmployeesDetailsComponent } from './import-employees-details.component';

describe('ImportEmployeesDetailsComponent', () => {
  let component: ImportEmployeesDetailsComponent;
  let fixture: ComponentFixture<ImportEmployeesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportEmployeesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportEmployeesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
