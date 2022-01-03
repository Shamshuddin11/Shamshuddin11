//Write a program to accept the string from the user and count the number of vowels and
//consonants in the given string?

package com.heraizen.stringprograms.ques2;

import java.util.Scanner;

public class VowelsAndConsonents {

	public static void main(String[] args) {
		String str;
		Scanner sc = new Scanner(System.in);
		System.out.println("\nEnter the String");
		str = sc.nextLine();
		int vowels = 0 , consonents = 0;
		str = str.toLowerCase();
		char[] carr = str.toCharArray();
		
		for(char c : carr)
		{
			if(Character.isLetter(c))
			{
				if(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
				{
					vowels++;
				}
				else
				{
					consonents++;
				}
			}
		}
		
		System.out.println("The Number of Vowels in given string are "+vowels+" the number of consonents are "+consonents);
		sc.close();
	}

}
