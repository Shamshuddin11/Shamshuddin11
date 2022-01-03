package com.heraizen.basics.ques1;

public class Student {
	private String sName;
	private int id;
	private Address address;
	private static int scount;
	
	public Student(String sname, int id, Address address) {
		super();
		this.sName = sname;
		this.id = id;
		this.address = address;
		Student.scount++;
	}
	
	public void display()
	{
		System.out.println("Name : "+sName+" Id : "+id+" "+address);
	}
	
	public static int getStudentCount()
	{
		return scount;
	}
}
