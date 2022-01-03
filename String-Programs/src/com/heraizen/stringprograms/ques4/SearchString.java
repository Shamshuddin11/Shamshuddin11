package com.heraizen.stringprograms.ques4;

import java.util.Scanner;

public class SearchString {

	public static void main(String[] args) {
		String str, search;
		Scanner sc = new Scanner(System.in);
		boolean found = false;
		System.out.println("\n Enter Group Of Strings which are Comma separated");
		str = sc.nextLine();
		
		
		System.out.println("\n Enter the String to Search");
		search = sc.next();
		
		String[] sarr = str.split(",");
		
		for(int i = 0 ; i < sarr.length ; i++)
		{
			if(sarr[i].equals(search))
			{
				System.out.println("The String "+search+" is found at "+i+" position");
				found = true;
				break;
			}
		}
		if(!found)
		{
			System.out.println("The String "+search+" is not found in string "+str);
		}
		
		sc.close();
	}

}
