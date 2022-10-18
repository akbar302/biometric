import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-export-employees-details',
  templateUrl: './export-employees-details.component.html',
  styleUrls: ['./export-employees-details.component.css']
})
export class ExportEmployeesDetailsComponent implements OnInit {

  opened = true;


  constructor() { }

  ngOnInit(): void {
  }

}
