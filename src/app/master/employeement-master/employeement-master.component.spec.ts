import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeementMasterComponent } from './employeement-master.component';

describe('EmployeementMasterComponent', () => {
  let component: EmployeementMasterComponent;
  let fixture: ComponentFixture<EmployeementMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeementMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeementMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
