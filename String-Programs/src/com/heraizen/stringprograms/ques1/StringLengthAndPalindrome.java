//Write a program to accept a String from user and display the length of the string. Also display
//the string in uppercase and lowercase and check whether it is a palindrome or not.

package com.heraizen.stringprograms.ques1;

import java.util.Scanner;

public class StringLengthAndPalindrome {
	
	public static void main(String[] args) {
		String str;
		Scanner sc = new Scanner(System.in);
		System.out.println("\nEnter the String");
		str = sc.nextLine();
		System.out.println("\n The length of the given string is "+str.length());
		System.out.println("\n The String in UpperCase :"+str.toUpperCase());
		System.out.println("\n The String in LowerCase :"+str.toLowerCase());
		StringBuilder s = new StringBuilder(str);
		String str1 = s.reverse().toString();
		if(str.equalsIgnoreCase(str1))
		{
			System.out.println("\n The given string is Palindrome");
		}
		else
		{
			System.out.println("\n The given string is not plaindrome");
		}
		sc.close();
	}

}
