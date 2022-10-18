import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-export-employee-leave',
  templateUrl: './export-employee-leave.component.html',
  styleUrls: ['./export-employee-leave.component.css']
})
export class ExportEmployeeLeaveComponent implements OnInit {

  opened = true;

  constructor() { }

  ngOnInit(): void {
  }

}
