package com.heraizen.basics.ques9;

import java.util.Scanner;

public class RecursiveFactorial {
 
	public static int fact(int n)
	{
		if(n == 1)
		{
			return n;
		}
		return n*fact(n-1);
	}
	
	public static void main(String[] args)
	{
		int n;
		Scanner sc = new Scanner(System.in);
		
		System.out.println("\n Enter the number to get Factorial");
		
		n = sc.nextInt();
		
		System.out.println("\n Factorial of "+n+" is "+fact(n));
		sc.close();
	}
}
