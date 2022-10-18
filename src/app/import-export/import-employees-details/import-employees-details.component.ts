import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-employees-details',
  templateUrl: './import-employees-details.component.html',
  styleUrls: ['./import-employees-details.component.css']
})
export class ImportEmployeesDetailsComponent implements OnInit {

  opened = true;

  constructor() { }

  ngOnInit(): void {
  }

}
