package com.heraizen.exception.ques4;

public class TestEmp {

	public static void main(String[] args) {
		try {
			Emp e1 = new Emp(101 , "Ali" , "Manager" , 60000);
			Emp e2 = new Emp(102 , "Arun" , "Officer" , 40000);
			
			System.out.println("Employee 1" + e1);
			System.out.println("Employee 2" + e2);
			
			Emp e3 = new Emp(103 , "Xyz" , "Clerk" , 450);
			System.out.println("Employee 3" + e3);
		}
		catch(Exception e)
		{
			System.out.println(e.getMessage());
		}

	}

}
