export class Employee{
     empid:string;
	 empName:string;
	 empRole:string;
	 empCategory:string;
	 empDept:string;
	 empSalary:string;

     constructor(empid:string, empName:string, empRole:string, empCategory:string, empDept:string,empSalary:string){
        this.empid = empid;
        this.empName = empName;
        this.empRole = empRole;
        this.empCategory = empCategory;
        this.empDept = empDept;
        this.empSalary = empSalary; 
     }
}