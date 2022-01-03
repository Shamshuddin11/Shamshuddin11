package com.heraizen.exception.ques5;

public class DbConnection {
	
	private static DbConnection obj;
	
	private DbConnection() {
		System.out.println("\n Inside DbConnection Constructor One Object Created");
	}
	
	public static synchronized DbConnection getDbConnectionInstance() {
		
		if(obj == null)
		{
			obj = new DbConnection();
			return obj;
		}
		else
		{
			throw new IllegalArgumentException("Only One DbConnection object can be created");
		}
	}

}
