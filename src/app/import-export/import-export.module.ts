import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportEmployeesDetailsComponent } from './import-employees-details/import-employees-details.component';
import { ExportEmployeesDetailsComponent } from './export-employees-details/export-employees-details.component';
import { ImporiEmployeesOtherDetailsComponent } from './impori-employees-other-details/impori-employees-other-details.component';
import { ExportEmployeesOtherDetailsComponent } from './export-employees-other-details/export-employees-other-details.component';
import { ImporiEmployeeLeaveComponent } from './impori-employee-leave/impori-employee-leave.component';
import { ExportEmployeeLeaveComponent } from './export-employee-leave/export-employee-leave.component';
import { ImportEmployeeshiftMonthwiseComponent } from './import-employeeshift-monthwise/import-employeeshift-monthwise.component';



@NgModule({
  declarations: [
    ImportEmployeesDetailsComponent,
    ExportEmployeesDetailsComponent,
    ImporiEmployeesOtherDetailsComponent,
    ExportEmployeesOtherDetailsComponent,
    ImporiEmployeeLeaveComponent,
    ExportEmployeeLeaveComponent,
    ImportEmployeeshiftMonthwiseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ImportExportModule { }
