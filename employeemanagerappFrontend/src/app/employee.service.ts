import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Employee } from './Employee';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  EmployeeData!: Array<Employee>;
  constructor(private http:HttpClient) {

   }

   url = "http://localhost:8000";
   
   public getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.url}/employee/all`);
   }

   public addEmployee(employee:Employee):Observable<Employee>{
    console.log("in add employee api "+employee);
    return this.http.post<Employee>(`${this.url}/employee/add`,employee);
   }

   public updateEmployee(employee:Employee):Observable<Employee[]>{
    console.log("in update employee api "+employee.empName)
    return this.http.put<Employee[]>(`${this.url}/employee/update`,employee);
   }

   public deleteEmployee(empid:String):Observable<any>{
    console.log("in delete employee api "+empid);
    return this.http.delete<Employee>(`${this.url}/employee/delete/${empid}`);
   }
}

