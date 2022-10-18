import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImporiEmployeesOtherDetailsComponent } from './impori-employees-other-details.component';

describe('ImporiEmployeesOtherDetailsComponent', () => {
  let component: ImporiEmployeesOtherDetailsComponent;
  let fixture: ComponentFixture<ImporiEmployeesOtherDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImporiEmployeesOtherDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImporiEmployeesOtherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
