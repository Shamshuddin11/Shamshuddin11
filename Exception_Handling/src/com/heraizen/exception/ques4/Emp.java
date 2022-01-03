package com.heraizen.exception.ques4;

public class Emp {
	
	 private int empId;
	 private String empName , designation;
	 private double basic; 
	 private double hra;
	public Emp(int empId, String empName, String designation, double basic) throws LowSalException {
		super();
		this.empId = empId;
		this.empName = empName;
		this.designation = designation;
		if(basic < 500)
		{
			throw new LowSalException("Basic Salary Cannot be so low as 500");
		}
		this.basic = basic;
		calculateHra();
	}
	private void calculateHra() {
		if(designation.equalsIgnoreCase("Manager"))
		{
			hra = (basic * 10 / 100);
		}
		if(designation.equalsIgnoreCase("officer"))
		{
			hra = (basic * 12 / 100);
		}
		if(designation.equalsIgnoreCase("Clerk"))
		{
			hra = (basic * 5 / 100);
		}
	}
	@Override
	public String toString() {
		return "Emp [empId=" + empId + ", empName=" + empName + ", designation=" + designation + ", basic=" + basic
				+ ", hra=" + hra + "]";
	}
	 
	 
	

}
