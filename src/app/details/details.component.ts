import { Component, OnInit, HostBinding,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';

import { Employee } from '../employee';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


@HostBinding('class.is-open')
  isOpen = false;

  constructor(private employeeservice:EmployeeService) { }
debugger;
  ngOnInit() {
    this.employeeservice.change.subscribe(isOpen => {
      this.isOpen = isOpen;
        });

  } 
}
