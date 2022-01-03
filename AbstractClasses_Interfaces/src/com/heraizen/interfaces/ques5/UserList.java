package com.heraizen.interfaces.ques5;

public class UserList implements MyIterator{
	
	private String[] name = new String[10];
	private int index;
	
	public UserList()
	{
		System.out.println("\nThe User List Is");
		index = 0;
		name[0] = "Ali";
		name[1] = "Arun";
		name[2] = "Kartik";
		name[3] = "Kishore";
		name[4] = "Sudipto";
		name[5] = "Nikil";
		name[6] = "Shams";
		name[7] = "Dhanya";
		name[8] = "Kiran";
		name[9] = "Richie";
	}

	@Override
	public boolean hasNext() {
		
		if(index < name.length)
		{
			return true;
		}
		else {
			index = 0;
			return false;
		}
	}

	@Override
	public String next() {
		if(hasNext())
		{
			return name[index++]+"\n"+ next();
		}
		else
		{
			return "UserList Ends";
		}
	}
	
	public static MyIterator getIterator()
	{
		return new UserList();
	}
	
}
