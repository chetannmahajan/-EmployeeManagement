package com.chetan.employeemanger.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Employee implements Serializable {
	
	@Id
	private String empid;
	private String empName;
	private String empRole;
	private String empCategory;
	private String empDept;
	private String empSalary;
	
	
	
	public Employee() {
		//super();
	}
	
	
	
	public Employee(String empid, String empName, String empRole, String empCategory, String empDept,
			String empSalary) {
		//super();
		this.empid = empid;
		this.empName = empName;
		this.empRole = empRole;
		this.empCategory = empCategory;
		this.empDept = empDept;
		this.empSalary = empSalary;
	}



	public String getEmpid() {
		return empid;
	}
	public void setEmpid(String empid) {
		this.empid = empid;
	}
	public String getEmpName() {
		return empName;
	}
	public void setEmpName(String empName) {
		this.empName = empName;
	}
	public String getEmpRole() {
		return empRole;
	}
	public void setEmpRole(String empRole) {
		this.empRole = empRole;
	}
	public String getEmpCategory() {
		return empCategory;
	}
	public void setEmpCategory(String empCategory) {
		this.empCategory = empCategory;
	}
	public String getEmpDept() {
		return empDept;
	}
	public void setEmpDept(String empDept) {
		this.empDept = empDept;
	}
	public String getEmpSalary() {
		return empSalary;
	}
	public void setEmpSalary(String empSalary) {
		this.empSalary = empSalary;
	}
	
	
	@Override
	public String toString() {
		return "Employee [empid=" + empid + ", empName=" + empName + ", empRole=" + empRole + ", empCategory="
				+ empCategory + ", empDept=" + empDept + ", empSalary=" + empSalary + "]";
	}
	
	
}
