import {  Component, NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LocationComponent} from './master/location/location.component';
import { HolidayComponent } from './master/holiday/holiday.component';
import { EmployeeListComponent } from './master/employee-list/employee-list.component';
import { EmployeeShiftComponent } from './master/employee-shift/employee-shift.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import { EmployeementMasterComponent } from './master/employeement-master/employeement-master.component';
import { MonitorComponent } from './monitor/monitor.component';
import { ImportEmployeesDetailsComponent } from './import-export/import-employees-details/import-employees-details.component';
import { ExportEmployeesDetailsComponent } from './import-export/export-employees-details/export-employees-details.component';
import { ImporiEmployeesOtherDetailsComponent } from './import-export/impori-employees-other-details/impori-employees-other-details.component';
import { ExportEmployeesOtherDetailsComponent } from './import-export/export-employees-other-details/export-employees-other-details.component';
import { ImporiEmployeeLeaveComponent } from './import-export/impori-employee-leave/impori-employee-leave.component';
import { ExportEmployeeLeaveComponent } from './import-export/export-employee-leave/export-employee-leave.component';
import { ImportEmployeeshiftMonthwiseComponent } from './import-export/import-employeeshift-monthwise/import-employeeshift-monthwise.component';
import { DailyAttendenceReportComponent } from './reports/daily-attendence-report/daily-attendence-report.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SignComponent } from './sign/sign.component';
import { SheetComponent } from './spread-sheet/sheet/sheet.component';




const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'location', component:LocationComponent},
  {path:'holiday', component:HolidayComponent},
  {path:'employee-list', component:EmployeeListComponent},
  {path:'employee-shift', component:EmployeeShiftComponent},
  {path:'sidenav', component:SidenavComponent},
  {path:'header', component:HeaderComponent},
  {path:'footer', component:FooterComponent},
  {path:'employeement-master', component:EmployeementMasterComponent},
  {path:'monitor', component:MonitorComponent},
  {path:'import-employees-details', component:ImportEmployeesDetailsComponent},
  {path:'export-employees-details', component:ExportEmployeesDetailsComponent},
  {path:'import-employees-other-details', component:ImporiEmployeesOtherDetailsComponent},
  {path:'export-employees-other-details', component:ExportEmployeesOtherDetailsComponent},
  {path:'import-employee-leave', component:ImporiEmployeeLeaveComponent},
  {path:'export-employee-leave', component:ExportEmployeeLeaveComponent},
  {path:'import-employeeshift-monthwise', component:ImportEmployeeshiftMonthwiseComponent},
  {path:'daily-attendence-report', component:DailyAttendenceReportComponent},
  {path:'pagination', component:PaginationComponent},
  {path:'sign', component:SignComponent},
  {path:'sheet', component:SheetComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
export const myRoutings = [
  LoginComponent,
  DashboardComponent,
  LocationComponent,
  HolidayComponent,
  EmployeeListComponent,
  EmployeeShiftComponent,
  EmployeementMasterComponent,
  MonitorComponent,
  ImportEmployeesDetailsComponent,
  ExportEmployeesDetailsComponent,
  ImporiEmployeesOtherDetailsComponent,
  ExportEmployeesOtherDetailsComponent,
  ImporiEmployeeLeaveComponent,
  ExportEmployeeLeaveComponent,
  ImportEmployeeshiftMonthwiseComponent,
  DailyAttendenceReportComponent,
  SidenavComponent,
  HeaderComponent,
  FooterComponent,
  PaginationComponent,
  SignComponent,
  SheetComponent,
  
]

