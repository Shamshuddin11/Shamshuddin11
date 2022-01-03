package com.heraizen.basics.ques7;

import com.heraizen.basics.ques6.Employee1;

public class Employee2 {
	
	private int empid;
	private String name;
	private float salary;
	
	

	public Employee2(int empid, String name) {
		super();
		this.empid = empid;
		this.name = name;
		this.salary = 20000;
	}



	public Employee2(int empid, String name, float salary) {
		super();
		this.empid = empid;
		this.name = name;
		this.salary = salary;
	}

	
	public void display() {
		System.out.println("Employee2 [empid=" + empid + ", name=" + name + ", salary=" + salary + "]");
	}



	public static void main(String[] args) {
		Employee2 e1 = new Employee2(111 , "Ali");
		
		Employee2 e2 = new Employee2(112 , "Shams" , 70000);
		
		e1.display();
		e2.display();
	}

}
