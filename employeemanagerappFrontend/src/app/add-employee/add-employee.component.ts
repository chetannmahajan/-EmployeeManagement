import { DialogComponent } from './../dialog/dialog.component';
import { Employee } from './../Employee';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService} from './../employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  
 

  // employeeForm!: FormGroup;
  constructor(public formBuilder:FormBuilder,private employeeservice:EmployeeService) {

    
  }

  employeeForm = this.formBuilder.group({
    empName:['',Validators.required],
    empRole:['',Validators.required],
    empCategory:['',Validators.required],
    empDept:['',Validators.required],
    empSalary:['',Validators.required],
  })  
    

  ngOnInit(): void {
    // this.employeeForm.valueChanges.subscribe(console.log);
  }

  addEmployee(employee: Employee){
    this.employeeservice.addEmployee(employee).subscribe(employee=>{
      console.log("In add employee");
      console.log(employee);
      this.employeeForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      )
  }

  


}
