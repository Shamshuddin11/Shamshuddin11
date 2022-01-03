//Write a program to create the class with firstName , middleName ,lastName
//When you call the display() it should display full name with ‘-‘ separator.

package com.heraizen.stringprograms.ques3;

public class DisplayName {
	
	private String firstName;
	private String middleName;
	private String lastName;
	

	public DisplayName(String firstName, String middleName, String lastName) {
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
	}

	public void display()
	{
		System.out.println("The User Name is : "+firstName+"-"+middleName+"-"+lastName);
	}

	public static void main(String[] args) {
		DisplayName dname = new DisplayName("Raj" , "Kumar" , "k");
		dname.display();
	}

}
