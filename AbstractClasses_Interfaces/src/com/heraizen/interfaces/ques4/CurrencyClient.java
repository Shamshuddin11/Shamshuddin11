package com.heraizen.interfaces.ques4;

import java.util.Scanner;

public class CurrencyClient {

	public static void main(String[] args) {
		
		String country;
		Scanner sc = new Scanner(System.in);
		
		System.out.println("\nEnter the Country name");
		country = sc.next();
		try {
		
			System.out.println(CurrencyContainer.getCurrency(country).getCurrency());
		}
		
		catch(IllegalArgumentException e)
		{
			System.out.println("Enter Country Name only India , USA or UK");
		}
	}
}
