package com.heraizen.basics.ques1;

public class TestStudent {

	public static void main(String[] args) {
		Address ad1 = new Address("#41" , "Jayanagar" , "Bangalore" , "560029" );
		Student s1 = new Student("Ali", 001 , ad1);
		
		Address ad2 = new Address("#44" , "Vijaynagar" , "Bangalore" , "560039" );
		Student s2 = new Student("Nikil", 002 , ad2);
		
		Address ad3 = new Address("#02" , "BtmLayout" , "Bangalore" , "560029" );
		Student s3 = new Student("Kartik", 003 , ad3);
		
		Address ad4 = new Address("#100" , "Rajajinagar" , "Bangalore" , "560019" );
		Student s4 = new Student("Sudipto", 004 , ad4);
		
		Address ad5 = new Address("#31" , "Kormangala" , "Bangalore" , "560017" );
		Student s5 = new Student("Ravi", 005 , ad5);
		
		Address ad6 = new Address("#12" , "BtmLayout" , "Bangalore" , "560029" );
		Student s6 = new Student("Shamshuddin", 006 , ad6);
		
		System.out.println("The Number of students are :"+Student.getStudentCount());
		
		System.out.println("The Students information is :");
		s1.display();
		s2.display();
		s3.display();
		s4.display();
		s5.display();
		s6.display();
	}

}
