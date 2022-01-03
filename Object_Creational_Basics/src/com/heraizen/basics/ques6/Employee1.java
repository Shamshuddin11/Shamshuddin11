package com.heraizen.basics.ques6;

public class Employee1 {
	
	private int empid;
	private String name;
	private int salary;
	
	

	public int getEmpid() {
		return empid;
	}



	public void setEmpid(int empid) {
		this.empid = empid;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public int getSalary() {
		return salary;
	}



	public void setSalary(int salary) {
		this.salary = salary;
	}



	@Override
	public String toString() {
		return "Employee1 [empid=" + empid + ", name=" + name + ", salary=" + salary + "]";
	}



	public static void main(String[] args) {
		Employee1 e1 = new Employee1();
		e1.setEmpid(100);
		e1.setName("Ali");
		e1.setSalary(50000);
		
		Employee1 e2 = new Employee1();
		e2.setEmpid(101);
		e2.setName("Shams");
		e2.setSalary(70000);
		
		System.out.println("The Employee Information is"+"\n"+e1+"\n"+e2);
	}

}
