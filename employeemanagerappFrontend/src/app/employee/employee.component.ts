import { EmployeeService } from './../employee.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Employee } from '../Employee';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  EmployeeList!:Array<Employee>;
  displayedColumns: string[] = ['empid','empName', 'empRole', 'empCategory', 'empDept', 'empSalary','action'];
  dataSource!:  MatTableDataSource<Employee>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private employeeService:EmployeeService, private dialog : MatDialog ) {
    
   }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(employees=>{
      this.dataSource = new MatTableDataSource(employees);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },error=>console.log('Error in fetching the data'));
  }

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(){
    this.dialog.open(DialogComponent,{
      width:'40%'
    })
  }

  editEmployee(employee:Employee){
    this.dialog.open(DialogComponent,{
      data:employee
    }).afterClosed().subscribe(val=>{
      if(val == "update"){
        this.employeeService.getEmployees();
      }
    })
  }

  deleteEmployee(employee:Employee){
    var empid = employee.empid;
    this.employeeService.deleteEmployee(empid).subscribe({
      
    })
    
  }
}
