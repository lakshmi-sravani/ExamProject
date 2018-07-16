import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import {  map } from 'rxjs/operators';
import { Employee } from './employee'

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(private http: HttpClient) { }

   getEmployee() : Observable<any> {
      return this.http.get('assets/employee.json');
    }
}
