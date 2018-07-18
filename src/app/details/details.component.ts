import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
// import { Employe } from '../employe.model';
import { Employee } from '../employee';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() employeedet: Employee;
  name: string;
  designation: string;
  skills: string;


  @HostBinding('class.is-open')
  isOpen = false;

  constructor(private employeeservice: EmployeeService) {

    console.log(this.employeedet);
  }
  debugger;

  ngOnInit() {
    this.employeeservice.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
    console.log(this.employeedet);
    if (this.employeedet === undefined) {

      this.employeedet = {
        name: '',
        designation: '',
        skills: ''

      }
    }

  }



}
