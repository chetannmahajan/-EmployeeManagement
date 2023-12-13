import { Employee } from './../Employee';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public editData:Employee, public formBuilder:FormBuilder,private employeeservice:EmployeeService) { }

  employeeForm = this.formBuilder.group({
    empid:['',Validators.required],
    empName:['',Validators.required],
    empRole:['',Validators.required],
    empCategory:['',Validators.required],
    empDept:['',Validators.required],
    empSalary:['',Validators.required],
  })  

  ngOnInit(): void {
    console.log(this.editData);
    if(this.editData){
      this.employeeForm.controls['empid'].setValue(this.editData.empid);
      this.employeeForm.controls['empName'].setValue(this.editData.empName);
      this.employeeForm.controls['empRole'].setValue(this.editData.empRole);
      this.employeeForm.controls['empCategory'].setValue(this.editData.empCategory);
      this.employeeForm.controls['empDept'].setValue(this.editData.empDept);
      this.employeeForm.controls['empSalary'].setValue(this.editData.empSalary);
    }
  }

  public updateEmployee(employee:Employee){
    this.employeeservice.updateEmployee(this.employeeForm.value).subscribe(employee=>{
      console.log("in updateEmployee");
      console.log(employee);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    )
      }
 

}
