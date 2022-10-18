import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImporiEmployeeLeaveComponent } from './impori-employee-leave.component';

describe('ImporiEmployeeLeaveComponent', () => {
  let component: ImporiEmployeeLeaveComponent;
  let fixture: ComponentFixture<ImporiEmployeeLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImporiEmployeeLeaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImporiEmployeeLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
