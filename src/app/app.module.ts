import { BrowserModule } from '@angular/platform-browser';
import { NgModule, VERSION } from '@angular/core';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { DetailsComponent } from './details/details.component'
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import {ScrollPanelModule} from 'primeng/scrollpanel';



@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TableModule,
    ScrollPanelModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
