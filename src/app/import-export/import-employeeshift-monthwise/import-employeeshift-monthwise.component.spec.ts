import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportEmployeeshiftMonthwiseComponent } from './import-employeeshift-monthwise.component';

describe('ImportEmployeeshiftMonthwiseComponent', () => {
  let component: ImportEmployeeshiftMonthwiseComponent;
  let fixture: ComponentFixture<ImportEmployeeshiftMonthwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportEmployeeshiftMonthwiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportEmployeeshiftMonthwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
