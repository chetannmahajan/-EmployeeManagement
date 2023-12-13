package com.chetan.employeemanger.service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chetan.employeemanger.model.Employee;
import com.chetan.employeemanger.repo.EmployeeRepo;

@Service
public class EmployeeService {

	@Autowired
	public EmployeeRepo employeeRepo;

	public Employee addEmployee(Employee employee) {
		Integer randomNumber = new Random().nextInt(782);
		System.out.println("random number=" + randomNumber);
		System.out.println("name=" + employee.getEmpName());
		employee.setEmpid(randomNumber.toString());
		return employeeRepo.save(employee);

	}

	public List<Employee> findAllEmployees() {
		return employeeRepo.findAll();
	}

	public Object updateEmployee(Employee employee) {
		Optional<Employee> emp = employeeRepo.findById(employee.getEmpid());
		if (emp.isPresent()) {
			return employeeRepo.save(employee);
		} else {
			// return "Employee with " + employee.getEmpid() + "is not present couldn't
			// update";

			try {
				throw new Exception(" Employee not found");
			} catch (Exception e) {
				return e.getMessage();
			}

		}
	}

	public Boolean DeleteEmployee(String empid) {
		employeeRepo.deleteById(empid);
		return true;
	}

	public Object findEmployeeById(String empId) {
		Optional<Employee> emp = employeeRepo.findById(empId);
		if (emp.isPresent()) {
			Employee newEmployee = emp.get();
			return newEmployee;
		} else {
			return "Employee with " + empId + "is not present";
		}
	}
}
