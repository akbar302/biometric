import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-daily-attendence-report',
  templateUrl: './daily-attendence-report.component.html',
  styleUrls: ['./daily-attendence-report.component.css']
})
export class DailyAttendenceReportComponent implements OnInit {

  opened = true;

  constructor(private dialog: MatDialog){}
  @ViewChild('secondDialog', { static: true })
secondDialog!: TemplateRef<any>;
@ViewChild('thirdDialog', { static: true })
thirdDialog!: TemplateRef<any>;
@ViewChild('fourthDialog', { static: true })
fourthDialog!: TemplateRef<any>;


  openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  openDialogWithoutRef() {
    this.dialog.open(this.secondDialog);
  }
  openDialogWithRef() {
    this.dialog.open(this.thirdDialog);
  }
  openDialogRef() {
    this.dialog.open(this.fourthDialog);
  }


  ngOnInit(): void {
  }

}
