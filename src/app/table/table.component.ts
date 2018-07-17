import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

import { EmployeeService } from '../employee.service';

import { Employee } from '../employee';

import { ScrollPanelModule } from 'primeng/scrollpanel';

// import { Employe } from '../employe.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  emp: Employee[];
  cols: any[];
  index: number = 0;



  employeeValue: Employee = {
    name: '',
    designation: '',
    skills: ''
  }
  debugger;
  constructor(private employeeService: EmployeeService) { }
  ngOnInit() {
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'designation', header: 'Designation' },
      { field: 'skills', header: 'Skills' }

    ];
    this.loadEmployee();
  }
  loadEmployee() {

    this.employeeService.getEmployee().subscribe(data => {
      console.log(data);
      this.emp = data.employee;
    });
  }

  data(i) {
    this.employeeValue = this.emp[i];

    console.log(this.employeeValue);
    this.employeeService.toggle();

  }

}

