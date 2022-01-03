package com.heraizen.basics.ques4;

import java.util.Arrays;

public class Students {
	
	private int sid;
	private String sname;
	private String[] sub = new String[5];
	

	public Students(int sid, String sname, String[] sub) {
		super();
		this.sid = sid;
		this.sname = sname;
		this.sub = sub;
	}

	public static int calcSum(int a[])
	{ 
		int sum = 0;
		for(int i : a)
		{
			sum += i;
		}
		return sum;
	}
	
	public void display()
	{
		System.out.println("\nThe Student information is id :"+sid+" name :"+ sname +" subjects "+Arrays.toString(sub));
	}

	public static void main(String[] args) {
		String[] subjects = {"Maths" , "Computers" , "Science" };
		Students s1 = new Students(001 , "Ali" , subjects); 
		Students s2 = new Students(002 , "Kartik" , subjects); 
		
		s1.display();
		s2.display();
		
		int[] a = {50 , 60 , 20 , 100};
		
		System.out.println("\nThe Sum of the "+Arrays.toString(a)+" is "+calcSum(a));
		
	}

}
