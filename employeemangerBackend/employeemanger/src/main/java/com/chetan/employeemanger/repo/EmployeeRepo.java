package com.chetan.employeemanger.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chetan.employeemanger.model.Employee;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, String> {

	//void deleteEmployeeByempid(String empid);

	//Optional findEmployeeByempid(String empid);

	
}
