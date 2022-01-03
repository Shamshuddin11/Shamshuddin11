package com.heraizen.exception.ques5;

public class TestDbConnection {

	public static void main(String[] args) {
	
		 DbConnection db1 = DbConnection.getDbConnectionInstance();
		 
		 DbConnection db2 = DbConnection.getDbConnectionInstance();
	}

}
