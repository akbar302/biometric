import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-employeement-master',
  templateUrl: './employeement-master.component.html',
  styleUrls: ['./employeement-master.component.css']
})
export class EmployeementMasterComponent implements OnInit {

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

