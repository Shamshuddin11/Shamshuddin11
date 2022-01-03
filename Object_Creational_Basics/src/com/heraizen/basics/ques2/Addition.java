package com.heraizen.basics.ques2;

public class Addition {
	
	public static int sum(int ... a)
	{
		int sum = 0;
		if(a.length == 1)
		{
			return a[0];
		}
		else
		{
			for(int i : a)
				sum += i;
		}
		return sum;
	}

	public static void main(String[] args) {
		System.out.println("The sum of 20 , 50 is "+Addition.sum(20 , 50));
		System.out.println("The sum of 20 , 50 , 100 is "+Addition.sum(20 , 50 , 100));
		System.out.println("The sum of 20 , 50 , 60 , 10  is "+Addition.sum(20 , 50 , 60 , 10));
		System.out.println("The sum of 20 is "+Addition.sum(20));
	}

}
