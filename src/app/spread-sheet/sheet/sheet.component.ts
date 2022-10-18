import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {
  opened = true;
  addressValue = 'Work Orders!A6';
  aSpreadSheetData: Object[] = [];
  name = 'Angular ' + VERSION.major;
  // editedCell:any;

  constructor() {}

  @ViewChild('spreadSheetInstance')
  spreadSheetInstance: SpreadsheetComponent;

  ngOnInit(): void {
    this.aSpreadSheetData = defaultData();
  }

  dataSourceChanged(args: any) {
    console.log('dataSourceChanged triggered', args);
  }
  dataBound() {
    console.log('dataBound triggered');
  }

  cellSave(args: any) {
    console.log('cellSave', args);
  }

  cellEdit(args: any) {}

  changeCellData() {
    console.log(this.aSpreadSheetData);
    this.spreadSheetInstance.updateCell(
      { value: 'im Updated' },
      'Work Orders!A6'
    );
  }

  actionBegin(args: any) {
    console.log('action Begin', args);
  }

  actionComplete(args: any) {
    console.log('actionComplete', args);
  }



 

 
}
function defaultData(): Object[] {
  throw new Error('Function not implemented.');
}

