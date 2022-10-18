import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { myRoutings } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MonitorComponent } from './monitor/monitor.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PaginationComponent } from './pagination/pagination.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';

import { SignComponent } from './sign/sign.component';
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    myRoutings,
    SidenavComponent,
    HeaderComponent,
    FooterComponent,
    MonitorComponent,
    PaginationComponent,
    SignComponent
  ],
  
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    SpreadsheetAllModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
