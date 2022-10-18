import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';





const materialComponents = [
  MatSidenavModule,MatButtonModule, MatToolbarModule,MatIconModule,MatMenuModule,
  MatListModule, MatExpansionModule,MatCardModule,FormsModule,MatDividerModule,
  MatGridListModule,MatTableModule
];
@NgModule({
 
    imports : [materialComponents],
    exports : [materialComponents]

})
export class MaterialModule { }
