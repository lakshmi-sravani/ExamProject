import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';

import { Employee } from '../employee';

import {ScrollPanelModule} from 'primeng/scrollpanel';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  emp: Employee[];
  cols: any[];

employeeValue:Employee={
name:'',
designation:'',
skills:''
}
debugger;
  constructor(private employeeService: EmployeeService) { }
  ngOnInit() {
     this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'designation', header: 'Designation' },
      { field: 'skills', header: 'Skills' },
      { field: 'details', header: 'Details' }
    ];
    this.loadEmployee();
  }
  loadEmployee() {

    this.employeeService.getEmployee().subscribe(data => {
      console.log(data);
      this.emp = data.employee;
    });
  }
  data(){

    console.log(this.emp);
  }
}
