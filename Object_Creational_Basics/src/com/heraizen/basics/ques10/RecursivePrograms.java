package com.heraizen.basics.ques10;

import java.util.Scanner;

public class RecursivePrograms {
	
	 public static int gcd(int a, int b)
	 {
	        if (a == 0)
	          return b;
	        if (b == 0)
	          return a;
	        if (a == b)
	            return a;
	        if (a > b)
	            return gcd(a-b, b);
	        return gcd(a, b-a);
	  }
	 
	 public static int fib(int n)
	 {
		 if(n <= 1)
			 return n;
		 else
			 return fib(n-1)+fib(n-2);
	 }
	 
	 public static int sum(int n)
	 {
		 if(n == 1)
			 return n;
		 else 
			 return n+sum(n-1);
	 }

	public static void main(String[] args) {
		int a , b , choice = 0;
		Scanner sc = new Scanner(System.in);
		while(choice !=4)
		{
			System.out.println("\n Enter a number ");
			a = sc.nextInt();
			System.out.println("\n Enter second number ");
			b = sc.nextInt();
			System.out.println("\n To get GCD of "+a+" , "+b+" press 1");
			System.out.println("\n To Find Fibnacci number of "+a+" press 2");
			System.out.println("\n To find Sum of  "+a+" natural numbers  press 3");
			System.out.println("\n To exit enter 4");
			System.out.println("\n Enter Your Choice ");
			choice = sc.nextInt();
			
			switch(choice)
			{
			case 1 : System.out.println("\n The GCD of "+a+" ," +b+" is "+gcd(a , b));
					 break;
			case 2 : System.out.println("\n The Fibnacci number of "+a+" is "+fib(a));
					 break;
			case 3 : System.out.println("\n The Sum of numbers till "+a+" is "+sum(a));
					 break;
			case 4 : break;
			}
		}
		sc.close();
		
	}

}
