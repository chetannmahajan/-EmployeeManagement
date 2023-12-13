package com.chetan.employeemanger.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chetan.employeemanger.model.Employee;
import com.chetan.employeemanger.service.EmployeeService;

@RestController
@RequestMapping("/employee")
public class EmployeeController {
	
	@Autowired
	public EmployeeService employeeservice;

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/all")
	public ResponseEntity<List<Employee>> getAllEmployee(){
		List<Employee> employees = employeeservice.findAllEmployees();
		return new ResponseEntity<>(employees, HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/find/{empid}")
	public ResponseEntity<Object> getEmployeeById(@PathVariable("empid") String empid){
		Object employee = employeeservice.findEmployeeById(empid);
		return new ResponseEntity<>(employee, HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/update")
	public ResponseEntity<Object> updateEmployeeById(@RequestBody Employee employee)
	{
		Object emp = employeeservice.updateEmployee(employee);
		return new ResponseEntity<>(emp, HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/add")
	public ResponseEntity<Employee> addEmployeeById(@RequestBody Employee employee){
		Employee emp = employeeservice.addEmployee(employee);
		return new ResponseEntity<>(emp, HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/delete/{empid}")
	public ResponseEntity<Boolean> deleteEmployeeById(@PathVariable("empid") String empid){
		Boolean emp = employeeservice.DeleteEmployee(empid);
		return new ResponseEntity<>(emp,HttpStatus.OK);
	}
}
   









