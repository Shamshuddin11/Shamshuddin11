package com.heraizen.basics.ques3;

import java.util.Scanner;

public class FactTableAndPrime {
	
	public static void factorial(int n)
	{
		int res = 1;
		for(int i=1 ; i<=n ; i++)
		{
			res *= i;
		}
		System.out.println("\n Factorial of "+n+" is "+res);
	}
	
	public static void table(int n)
	{
		System.out.println("\n The table of "+n+" is");
		for(int i=1 ; i<=10 ; i++)
		{
			System.out.println(n+" *"+" "+i+"= "+(n*i));
		}
	}
	
	public static void isPrime(int n)
	{
		if(n == 0 || n == 1 || n < 0)
		{
			System.out.println(n+" is not a prime number");
			return;
		}
	
		if(n == 2)
		{
			System.out.println(n+" is a prime number");
			return;
		}
		
		if((n & 1) == 0)
		{
			System.out.println(n+" is not a prime number");
			return;
		}
		
		for(int i = 3 ; i < ((int)Math.sqrt(n))+1 ; i+=2)
		{
			if(n%i == 0)
			{
				System.out.println(n+" is not a prime number");
				return;
			}
		}
		System.out.println(n+" is a prime number");
	}
	

	public static void main(String[] args) {
	
		int n , choice = 0;
		Scanner sc = new Scanner(System.in);
		while(choice !=4)
		{
			System.out.println("\n Enter a number ");
			n = sc.nextInt();
			System.out.println("\n To get Factorial of "+n+" press 1");
			System.out.println("\n To get Mathematical table of "+n+" press 2");
			System.out.println("\n To Check if "+n+" is Prime or not  press 3");
			System.out.println("\n To exit enter 4");
			System.out.println("\n Enter Your Choice ");
			choice = sc.nextInt();
			
			switch(choice)
			{
			case 1 : factorial(n);
					 break;
			case 2 : table(n);
					 break;
			case 3 : isPrime(n);
					 break;
			case 4 : break;
			}
		}
		sc.close();
	}

}
