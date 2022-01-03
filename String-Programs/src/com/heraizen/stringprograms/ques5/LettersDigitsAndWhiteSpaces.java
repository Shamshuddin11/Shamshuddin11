// Write a program to find the
//1. No. of letters
//2. No. of digits
//3. No. of whitespaces in the following input.

package com.heraizen.stringprograms.ques5;

import java.util.Scanner;

public class LettersDigitsAndWhiteSpaces {
	
	public static void main(String[] args)
	{
		String str;
		Scanner sc = new Scanner(System.in);
		int letters = 0, digits = 0, whiteSpaces = 0;
		
		System.out.println("\n Enter a sentence");
		str = sc.nextLine();
		
		char[] carr = str.toCharArray();
		
		for(char c : carr)
		{
			if(Character.isLetter(c))
			{
				letters++;
			}
			if(Character.isDigit(c))
			{
				digits++;
			}
			if(c == ' ')
			{
				whiteSpaces++;
			}
		}
		
		System.out.println("\nThe Number of letters, digits and white-spaces in the given sentence are : ");
		System.out.println("\nLetters "+letters);
		System.out.println("\nDigits "+digits);
		System.out.println("\nWhite Spaces "+whiteSpaces);
		
		sc.close();
	}
	
}
